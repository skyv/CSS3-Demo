
$("#planets a").mouseover(function(){ 
	var planet = $(this).text().toLowerCase(); 
	$("#planets").find('#menu_'+planet).parents('li').append('<section id="description_box"></section>');

	if(planet == 'mercury')
		$('#description_box').html('Mercury takes 59 days to make a rotation but only 88 days to circle the Sun.  That means that there are fewer than 2 days in a year!  Many astronomers believe that Mercury might be the core of what was once a much larger planet -- it appears to be a huge ball of iron covered by a thin layer of rock.');
	if(planet == 'venus')
		$('#description_box').html('Venus is the brightest planet in our sky and can sometimes be seen with the naked eye if you know where to look.  It is the solar systems brightest planet -- yellow clouds of sulfuric acid reflect the suns light brightly.');
	if(planet == 'earth')
		$('#description_box').html('Earth has more exposed water than land.  Three quarters of the Earth is covered by water!Earth is the third planet from the Sun. This is also the fifth largest planet in the entire solar system.Earth is the only planet known to have life.');
	if(planet == 'mars')
		$('#description_box').html('Mars is the home of "Olympus Mons", the largest volcano found in the solar system.  It stands about 27 kilometers high with a crater 81 kilometers wide.');
	if(planet == 'jupiter')
		$('#description_box').html('Jupiter is the largest planet in the solar system, but it spins very quickly on its axis.  A day on Jupiter lasts only 9 hours and 55 minutes.  Ack, I get dizzy just thinking about it! Jupiter is so big that you could fit all the other planets in the solar system inside it.');
	if(planet == 'saturn')
		$('#description_box').html('Saturn is the second biggest planet, but it’s also the lightest planet.  If there was a bathtub big enough to hold Saturn, it would float in the water!The rings that surrounds Saturn could be the remnants of a moon that was shattered by Saturns gravity.Saturns rings are as wide as 22 planet earths all in a row but are only 30 feet thick!');
	if(planet == 'uranus')
		$('#description_box').html('Uranus’ axis is at a 97 degree angle, meaning that it orbits lying on its side!  Talk about a lazy planet.Uranus has the second most complex set of rings in our solar system (Saturn has the most defined rings).');
	if(planet == 'neptune')
		$('#description_box').html('Neptune was discovered in 1846.  In 2011 it finally made its first lap around the sun since we discovered it -- to make a complete orbit around the sun, because one Neptune year lasts 165 Earth years!Like Jupiter, Neptune has a dark spot caused by a storm.');
	if (planet == "sun")
	$('#description_box').html('The Sun is one among the 200 billion stars in our Milky Way galaxy.Sun is one among the 6000 stars, which is visible to naked eye from the Earth.It takes up to 50 million years for the energy produced at the core of the Sun to reach its surface.');

	if (planet == "sun"){
		$('#'+planet).addClass('sun_hover');s
		return false;
	} 
	$('#container').find('#'+planet).removeClass('normal_orbit').addClass('highlight'); 
	$('#container').find('#'+planet+' a').addClass('planet_hover');
});	

$("#planets a").mouseleave(function(){ 
	var planet = $(this).text().toLowerCase(); 
	$("#planets").find('#description_box').remove();
	if (planet == "sun") {
		$('#'+planet).removeClass('sun_hover');
		return false;
	}
	$('#container').find('#'+planet).removeClass('highlight').addClass('normal_orbit'); 
	$('#container').find('#'+planet+' a').removeClass('planet_hover');
});

$(".planet a").mouseover(function(){
	$(this).addClass('planet_hover');
 });

$(".planet a").mouseleave(function(){
	$(this).removeClass('planet_hover');
 });
