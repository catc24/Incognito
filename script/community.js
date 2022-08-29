function community(app) {
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Community';
    app.search.input.style.display = 'none';
    app.main.support = app.createElement(
        'div', 
        [
            app.createElement('section', [
                app.createElement('p', 'You are being taken to another website (https://discord.gg/MsbeNvVq6q).', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
                    app.createElement('p', 'Are you sure you want to <a href="https://discord.gg/MsbeNvVq6q">proceed</a>?', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
            ], {
                class: 'data-section'
            }),
            
        ]);
        app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function(){
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { community };
