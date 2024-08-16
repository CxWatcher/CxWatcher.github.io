(function() {
    'use strict';

    const jsonURL = 'https://cxwatcher.github.io/teams.json';
    fetch(jsonURL)
        .then(response => response.json())
        .then(teamColors => {
            const teams = {};
            for (const [username, color] of Object.entries(teamColors)) {
                if (!teams[color]) {
                    teams[color] = [];
                }
                teams[color].push(username);
            }

            function changeUserBoxColor() {
                const usernames = document.querySelectorAll('.username');
                usernames.forEach(function(username) {
                    const name = username.textContent.trim();
                    if (teamColors[name]) {
                        username.closest('.user-marker-inner').style.backgroundColor = teamColors[name];
                    }
                });
            }

            window.addEventListener('load', changeUserBoxColor);
            new MutationObserver(changeUserBoxColor).observe(document.body, { childList: true, subtree: true });

            const gulagDiv = document.querySelector('.gulag');
            if (gulagDiv) {
                const buttonContainer = document.createElement('div');
                buttonContainer.style.marginTop = '10px';
                const buttonState = {};
                for (const [color, members] of Object.entries(teams)) {
                    const teamButton = document.createElement('button');
                    teamButton.textContent = `${color.charAt(0).toUpperCase() + color.slice(1)} Team`;
                    teamButton.style.margin = '5px';
                    teamButton.style.backgroundColor = color;
                    teamButton.style.color = color === 'yellow' || color === 'white' ? 'black' : 'white';
                    teamButton.style.border = 'none';
                    teamButton.style.padding = '5px';
                    teamButton.style.borderRadius = '5px';
                    teamButton.style.display = 'block';

                    buttonContainer.appendChild(teamButton);

                    buttonState[color] = false;

                    teamButton.addEventListener('click', () => {
                        const usernames = document.querySelectorAll('.username');
                        if (!buttonState[color]) {
                            usernames.forEach(function(username) {
                                const name = username.textContent.trim();
                                if (teamColors[name] === color) {
                                    username.closest('.user-marker-inner').style.display = 'block';
                                } else {
                                    username.closest('.user-marker-inner').style.display = 'none';
                                }
                            });
                            buttonState[color] = true;
                        } else {
                            usernames.forEach(function(username) {
                                username.closest('.user-marker-inner').style.display = 'block';
                            });
                            buttonState[color] = false;
                        }
                    });
                }
                gulagDiv.insertAdjacentElement('afterend', buttonContainer);
            }

            // Search bar styled to match the health list
            const searchBarContainer = document.createElement('div');
            searchBarContainer.style.position = 'fixed';
            searchBarContainer.style.top = '10px';
            searchBarContainer.style.left = '50%';
            searchBarContainer.style.transform = 'translateX(-50%)';
            searchBarContainer.style.padding = '10px';
            searchBarContainer.style.borderRadius = '8px';
            searchBarContainer.style.width = '300px';
            searchBarContainer.style.zIndex = '1001';
            searchBarContainer.style.fontFamily = 'Arial, sans-serif';

            const searchBar = document.createElement('input');
            searchBar.type = 'text';
            searchBar.placeholder = 'Search player...';
            searchBar.style.width = '90%';
            searchBar.style.padding = '10px';
            searchBar.style.borderRadius = '8px';
            searchBar.style.border = 'none';
            searchBar.style.backgroundColor = 'black';
            searchBar.style.color = 'green';
            searchBar.style.fontFamily = 'Arial, sans-serif';
            searchBar.style.fontSize = '16px';
            searchBar.style.outline = 'none';

            const clearButton = document.createElement('button');
            clearButton.textContent = '✕';
            clearButton.style.position = 'absolute';
            clearButton.style.right = '20px';
            clearButton.style.top = '50%';
            clearButton.style.transform = 'translateY(-50%)';
            clearButton.style.backgroundColor = 'transparent';
            clearButton.style.border = 'none';
            clearButton.style.color = 'white';
            clearButton.style.fontSize = '18px';
            clearButton.style.cursor = 'pointer';
            clearButton.style.display = 'none';

            const searchResults = document.createElement('div');
            searchResults.style.backgroundColor = 'black';
            searchResults.style.color = 'green';
            searchResults.style.position = 'absolute';
            searchResults.style.zIndex = '1001';
            searchResults.style.borderRadius = '5px';
            searchResults.style.marginTop = '5px';
            searchResults.style.padding = '5px';
            searchResults.style.width = '100%';
            searchResults.style.display = 'none';
            searchResults.style.fontFamily = 'Arial, sans-serif';

            searchBar.addEventListener('input', () => {
                const inputValue = searchBar.value.toLowerCase().trim();
                const usernames = Array.from(document.querySelectorAll('.username')).map(username => username.textContent.trim());

                clearButton.style.display = inputValue ? 'block' : 'none';

                if (inputValue.length < searchBar.lastValue?.length) {
                    resetView();
                }

                searchBar.lastValue = inputValue;

                if (inputValue) {
                    const matchingUsernames = usernames.filter(name => name.toLowerCase().startsWith(inputValue));
                    searchResults.innerHTML = '';
                    searchResults.style.display = matchingUsernames.length ? 'block' : 'none';

                    matchingUsernames.forEach(name => {
                        const suggestion = document.createElement('div');
                        suggestion.textContent = name;
                        suggestion.style.cursor = 'pointer';
                        suggestion.style.padding = '5px';
                        suggestion.style.borderRadius = '5px';
                        suggestion.style.backgroundColor = 'black';
                        suggestion.style.color = 'green';
                        suggestion.onmouseover = () => suggestion.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
                        suggestion.onmouseout = () => suggestion.style.backgroundColor = 'black';
                        suggestion.onclick = () => {
                            searchBar.value = name;
                            searchResults.style.display = 'none';
                            locatePlayer(name);
                        };
                        searchResults.appendChild(suggestion);
                    });
                } else {
                    searchResults.style.display = 'none';
                }
            });

            clearButton.addEventListener('click', () => {
                searchBar.value = '';
                clearButton.style.display = 'none';
                searchResults.style.display = 'none';
                resetView();
            });

            searchBarContainer.appendChild(searchBar);
            searchBarContainer.appendChild(clearButton);
            searchBarContainer.appendChild(searchResults);
            document.body.appendChild(searchBarContainer);

            function locatePlayer(name) {
                const usernames = document.querySelectorAll('.username');
                usernames.forEach(username => {
                    if (username.textContent.trim() === name) {
                        username.closest('.user-marker-inner').style.display = 'block';
                        highlightPlayer(username.closest('.user-marker-inner'), usernames);
                    } else {
                        username.closest('.user-marker-inner').style.display = 'none';
                    }
                });
            }

            function highlightPlayer(playerElement, usernames) {
                const playerColor = playerElement.style.backgroundColor;
                const map = document.querySelector('#map');

                map.scrollTo(playerElement.offsetLeft - 200, playerElement.offsetTop - 200);

                playerElement.style.border = `3px solid ${playerColor}`;
                playerElement.style.animation = 'strobe 1s infinite';
                const styleSheet = document.createElement('style');
                styleSheet.type = 'text/css';
                styleSheet.innerHTML = `
                    @keyframes strobe {
                        0% { box-shadow: 0 0 5px ${playerColor}; }
                        50% { box-shadow: 0 0 20px ${playerColor}; }
                        100% { box-shadow: 0 0 5px ${playerColor}; }
                    }
                `;
                document.head.appendChild(styleSheet);

                const teamButtons = document.querySelectorAll('button');
                teamButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        map.style.transform = 'scale(1)';
                        playerElement.style.border = 'none';
                        playerElement.style.animation = 'none';
                        usernames.forEach(username => username.closest('.user-marker-inner').style.display = 'block');
                    });
                });
            }

            function resetView() {
                const map = document.querySelector('#map');
                const playerElements = document.querySelectorAll('.user-marker-inner');
                playerElements.forEach(player => {
                    player.style.display = 'block';
                    player.style.border = 'none';
                    player.style.animation = 'none';
                });
            }

            const dataListContainer = document.createElement('div');
            dataListContainer.style.position = 'fixed';
            dataListContainer.style.bottom = '10px';
            dataListContainer.style.left = '10px';
            dataListContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            dataListContainer.style.color = 'white';
            dataListContainer.style.padding = '10px';
            dataListContainer.style.borderRadius = '5px';
            dataListContainer.style.zIndex = '1000';
            dataListContainer.style.maxHeight = '80vh';
            dataListContainer.style.overflowY = 'auto';

            const dataList = document.createElement('ul');
            dataList.id = 'data-list';
            dataList.style.listStyleType = 'none';
            dataList.style.padding = '0';
            dataList.style.margin = '0';

            dataListContainer.appendChild(dataList);
            document.body.appendChild(dataListContainer);

            const toggledUsers = {};
            function updateList() {
                fetch('https://appapi.iceposeidon.com/public')
                    .then(response => response.json())
                    .then(data => {
                        const sortedData = data.sort((a, b) => a.lives_remaining - b.lives_remaining);
                        const list = document.getElementById('data-list');
                        list.innerHTML = '';

                        sortedData.forEach(entry => {
                            const listItem = document.createElement('li');
                            const link = document.createElement('a');
                            link.href = `https://kick.com/${entry.name}`;
                            link.textContent = entry.name;
                            link.target = '_blank';
                            const livesText = document.createTextNode(` - ${entry.lives_remaining}`);
                            listItem.appendChild(link);
                            listItem.appendChild(livesText);
                            list.appendChild(listItem);
                            const nameLower = entry.name.toLowerCase();
                            listItem.addEventListener('mouseover', () => {
                                if (Object.keys(toggledUsers).length === 0) {
                                    const usernames = document.querySelectorAll('.username');
                                    usernames.forEach(function (username) {
                                        const name = username.textContent.trim().toLowerCase();
                                        if (name === nameLower) {
                                            username.closest('.user-marker-inner').style.display = 'block';
                                        } else {
                                            username.closest('.user-marker-inner').style.display = 'none';
                                        }
                                    });
                                }
                            });

                            listItem.addEventListener('mouseout', () => {
                                if (Object.keys(toggledUsers).length === 0) {
                                    const usernames = document.querySelectorAll('.username');
                                    usernames.forEach(function (username) {
                                        username.closest('.user-marker-inner').style.display = 'block';
                                    });
                                }
                            });

                            listItem.addEventListener('click', () => {
                                const usernames = document.querySelectorAll('.username');

                                if (toggledUsers[nameLower]) {
                                    usernames.forEach(function (username) {
                                        if (username.textContent.trim().toLowerCase() === nameLower) {
                                            username.closest('.user-marker-inner').style.display = 'none';
                                        }
                                    });
                                    listItem.style.backgroundColor = '';
                                    delete toggledUsers[nameLower];
                                } else {
                                    usernames.forEach(function (username) {
                                        if (username.textContent.trim().toLowerCase() === nameLower) {
                                            username.closest('.user-marker-inner').style.display = 'block';
                                        } else if (!toggledUsers[username.textContent.trim().toLowerCase()]) {
                                            username.closest('.user-marker-inner').style.display = 'none';
                                        }
                                    });

                                    listItem.style.backgroundColor = 'green';
                                    toggledUsers[nameLower] = true;
                                }
                                usernames.forEach(function (username) {
                                    const name = username.textContent.trim().toLowerCase();
                                    if (toggledUsers[name]) {
                                        username.closest('.user-marker-inner').style.display = 'block';
                                    }
                                });
                            });

                            if (toggledUsers[nameLower]) {
                                listItem.style.backgroundColor = 'green';
                            }
                        });

                        const usernames = document.querySelectorAll('.username');
                        usernames.forEach(function (username) {
                            const nameLower = username.textContent.trim().toLowerCase();
                            if (toggledUsers[nameLower]) {
                                username.closest('.user-marker-inner').style.display = 'block';
                            }
                        });
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }

            updateList();
            setInterval(updateList, 10000);
        })
        .catch(error => console.error('Error fetching team colors:', error));
})();
