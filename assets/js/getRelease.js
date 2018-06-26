function getRelease()
{
    $.getJSON("release.json",{}, function( data ){
        var releaseState = data.release.state;
        var releaseVersion = data.release.version;
        var releaseLink = data.release.link;

        try {
            var dl = document.getElementById('dl-button');
            dl.innerHTML = "Download " + releaseState + " (" + releaseVersion + ")";
            if (releaseLink == "None") {
                $('#dl-button').addClass('is--disabled');
                $('#dl-button').attr('aria-disabled', true);
            } else {
                $('#dl-button').attr('href', releaseLink);
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