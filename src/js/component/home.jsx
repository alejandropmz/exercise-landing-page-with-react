import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"
import Carousel from "./Carousel.jsx"
import Title from "./Title.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center mb-10">
			<Navbar 
			Navbar = "Nabvar"
			Features = "Features"
			Pricing = "Pricing"
			Disable = "Disable"/>

			<div className="container">
			<div className="title font-style">
			<Title 
			title = "Landing page with React to 4Geeks Academy"/>
			</div>
			<div className="carousel">
				<Carousel 
				image1 = "https://i.picsum.photos/id/512/800/800.jpg?hmac=-Q9vHXSapTTo8mbCOtMUzr6mydu3RfYD-hdhSH9N6ag"
				image2 = "https://i.picsum.photos/id/974/800/800.jpg?hmac=qMLS4RfFZPy-gVIGLWAmOPTeG5MfrffW4mXtsH3_cR0"
				image3 = "https://i.picsum.photos/id/787/800/800.jpg?hmac=SB0tV3MHSnUdH6X6uaX_nKaZFa8eGx-6Ymusoyh3SME"/>
			</div>
			<div className="d-flex justify-content-center justify-content-evenly mt-5">
				<Card 
				cardImage = "https://i.picsum.photos/id/320/400/400.jpg?hmac=Kh2RtMOYAJqfx3SrWwGn8lal-U5XrBhd_jVCguTtbhw"
				cardTitle = "Sweet evening sun"
				cardText = "There are days when the sun gives us a beautiful sunset, even if you are inside the city..."
				buttonUrl = "https://www.google.com/search?q=evening+city&client=firefox-b-d&sxsrf=ALiCzsamfVJh_s873G35l0sY430msM8kYQ:1668569102265&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjkpP6k4LH7AhXXilwKHcwpCigQ_AUoAXoECAMQAw&biw=1536&bih=711&dpr=1.25"/>
				
				<Card 
				cardImage = "https://i.picsum.photos/id/476/400/400.jpg?hmac=ZjHYhjWvjNoM-bju-_H6q-Y3oU7lVOcpuoyMgVf5J9U"
				cardTitle = "Green color for the soul"
				cardText = "Green forests often become a safe place for those looking to get something within them."
				buttonUrl = "https://www.google.com/search?q=green+forest&tbm=isch&ved=2ahUKEwj_2-Km4LH7AhUDYxoKHSocD9MQ2-cCegQIABAA&oq=green+forest&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgAEIAEEBM6CAgAEIAEELEDOgQIABBDOggIABCxAxCDAToHCAAQsQMQQzoHCCMQ6gIQJzoLCAAQgAQQsQMQgwE6BAgAEANQywhY8FNg7FRoAXAAeACAAY4DiAGFKZIBBjItMTMuNZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=Elh0Y_8Kg8Zpqri8mA0&bih=711&biw=1536&client=firefox-b-d"/>
				
				<Card 
				cardImage = "https://i.picsum.photos/id/809/400/400.jpg?hmac=Jh5x5sAfa_KZVJilA4iQVXdykQ3fsnl6zwEi4GOnCSY"
				cardTitle = "White peace."
				cardText = "Knowing the world in its distances in a dream that few can fulfill, despite the daily monotony."
				buttonUrl = "https://www.google.com/search?q=White+clouds+mountains&tbm=isch&ved=2ahUKEwjL_tLG4LH7AhVI44UKHRoZBz0Q2-cCegQIABAA&oq=White+clouds+mountains&gs_lcp=CgNpbWcQAzIHCAAQgAQQEzoECCMQJzoFCAAQgAQ6BAgAEEM6BAgAEB46CAgAEAUQHhATOggIABAIEB4QE1CuBViAEGD6EGgAcAB4AIAB4AOIAaQUkgEHMi00LjMuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=VFh0Y8uENMjGlwSaspzoAw&bih=711&biw=1536&client=firefox-b-d"/>
				
				<Card 
				cardImage = "https://i.picsum.photos/id/735/400/400.jpg?hmac=6W-K0BM-u_Io4ipaNNuwivJqOfHoa-1zFSKl67jHJ0U"
				cardTitle = "Love cliff"
				cardText = "Each person inside expects a love like the one they are willing to give..."
				buttonUrl = "https://www.google.com/search?q=cliff+wallpaper&tbm=isch&ved=2ahUKEwiIoJzL4LH7AhVKdBoKHfViBkwQ2-cCegQIABAA&oq=cliff+wallpap&gs_lcp=CgNpbWcQARgAMgUIABCABDIECAAQHjIECAAQHjIECAAQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjoECCMQJzoHCCMQ6gIQJzoECAAQQzoICAAQsQMQgwE6CAgAEIAEELEDOgcIABCxAxBDULMNWPtNYLdXaAVwAHgBgAHHAogBiymSAQYyLTE4LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=Xlh0Y4j5GsroafXFmeAE&bih=711&biw=1536&client=firefox-b-d"/>
			</div>
			</div>
			
			<Footer 
			footerDescription = "© 2022 Company, Inc"/>
		</div>
	);
};

export default Home;
