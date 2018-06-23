function getRelease()
{
    $.getJSON("version.json",{}, function( data ){
        var releaseState = data.release.state;
        var releaseVersion = data.release.version;
        var releaseLink = data.release.link;

        try {
            var dl = document.getElementById('dl-button');
            dl.innerHTML = "Download" + releaseState + " (" + releaseVersion + ")";
            $('#dl-button').attr('href', releaseLink);
        } catch (error) {
            console.error("Couldn't get data.");
        }
    });
}