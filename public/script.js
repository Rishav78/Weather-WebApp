
$(document).ready(function(){
    const search = document.querySelector('input');
    const searchbox = new google.maps.places.SearchBox(search);
    searchbox.addListener('places_changed', async () => {
        const [place] = searchbox.getPlaces();
        if(!place) return 0;
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        const res = await fetch(`http://localhost:8000/weather/?lng=${longitude}&&lat=${latitude}`);
        const data = await res.json();
        console.log(data);
        $('#wind').html(data.currently.windSpeed)
        $('#temp').html(data.currently.temperature)
        $('#status').html(data.currently.summary);
        $('#pre').html(data.currently.precipProbability*100);
    })
});