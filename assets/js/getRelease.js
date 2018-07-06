function getRelease()
{
    $.getJSON("release.json",{}, function( data ){
        var releaseState = data.release.state;
        var releaseVersion = data.release.version;
        var releaseDl = data.release.can_download;

        var betaVersion = data.beta.version;
        var betaBuild = data.beta.build;
        var betaDl = data.beta.can_download;

        var baseURL = "https://github.com/TheAngelReturns/the-angel-returns/releases/tag/";

        try {
            var dl = document.getElementById('dl-button');
            dl.innerHTML = "Download " + releaseState + " (" + releaseVersion + ")";
            if (releaseDl == "False") {
                $('#dl-button').addClass('is--disabled');
                $('#dl-button').attr('aria-disabled', true);
            } else {
                $('#dl-button').attr('href', baseURL + releaseVersion);
            }
            
        } catch (error) {
            console.error("Couldn't get data.");
        }

        try {
            var beta = document.getElementById('dl-button-beta');
            beta.innerHTML = "Download " + betaVersion + " Beta " + betaBuild;
            if (betaDl == "False") {
                $('#dl-button-beta').hide();
            } else {
                $('#dl-button-beta').attr('href', baseURL + betaVersion + "beta" + betaBuild);
            }
            
        } catch (error) {
            console.error("Couldn't get data.");
        }
    });
}

function getAliceRelease()
{
    $.getJSON("release.json", {}, function( data ){
        var aliceosState = data.aliceos.state;
        var aliceosVersion = data.aliceos.version;
        var aliceosLink = data.aliceos.link;

        try {
            var adl = document.getElementById('aliceos-dl-button');
            adl.innerHTML = "Download " + aliceosState + " (" + aliceosVersion + ")";
            if (aliceosLink == "None") {
                $('#aliceos-dl-button').addClass('is--disabled');
                $('#aliceos-dl-button').attr('aria-disabled', true);
            } else {
                $('#aliceis-dl-button').attr('href', aliceosLink);
            }
            
        } catch (error) {
            console.error("Couldn't get data")
        }
    })
}