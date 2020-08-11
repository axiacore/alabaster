function loadBrowserMessage(options) {
    var browserMessage = $('<p>', {
        class: 'outdated-browser__text',
        text: options.text
    });

    var browserLink = $('<a>', {
        class: 'btn outdated-browser__btn',
        href: options.btnLink,
        target: '_blank',
        text: options.btnText
    });

    $('<div>', {
        class: 'outdated-browser',
        html: browserMessage
    }).append(browserLink).appendTo('body');
}

function ax3OutdatedBrowser() {
    var browserList = [
        {
            'name': 'Chrome',
            'minVersion': 46
        },
        {
            'name': 'Safari',
            'minVersion': 9
        },
        {
            'name': 'Firefox',
            'minVersion': 42
        },
        {
            'name': 'Opera',
            'minVersion': 13
        },
        {
            'name': 'Edge',
            'minVersion': 12
        },
        {
            'name': 'IE',
            'minVersion': false
        }
    ];

    for (var item in browserList) {
        if (browserList[item].name == platform.name) {
            if (browserList[item].minVersion == false) {
                loadBrowserMessage({
                    text: 'Tu navegador no está soportado. Para la correcta visualización del sitio es necesario que uses un navegador actualizado.',
                    btnLink: 'https://bestvpn.org/outdatedbrowser/es',
                    btnText: 'Ver navegadores'
                });
                break;
            } else if (parseInt(platform.version, 10) < browserList[item].minVersion) {
                loadBrowserMessage({
                    text: 'Tu navegador está desactualizado. Es posible que algunas de las funcionalidades no se visualicen de forma correcta.',
                    btnLink: 'https://bestvpn.org/outdatedbrowser/es',
                    btnText: 'Actualizar navegador'
                });
                break;
            }
        }
    }
}

export default ax3OutdatedBrowser;
