import img from "../../images/img1.jpg";
import "./Gallery.css";

const Gallery = () => {
	return (
		<div className="GalleryPage">
			<h1>Gallery</h1>

			<>
				<div className="gallery">
					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src="https://ictc-dit.github.io/Assets/Poster_300.png"
								alt="Portrait by Jessica Felicio"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Jessica Felicio
							</figcaption>
						</figure>
						<figure className="gallery__thumb">
							<img
								src="https://wallpaperaccess.com/full/154009.jpg"
								alt="Portrait by Oladimeji Odunsi"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Oladimeji Odunsi
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src="https://www.enjpg.com/img/2020/cool-for-boys-4.jpg"
								alt="Portrait by Alex Perez"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Alex Perez
							</figcaption>
						</figure>
					</div>

					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src="https://www.pixelstalk.net/wp-content/uploads/images4/Cool-Wallpapers-HD.jpg"
								alt="Portrait by Noah Buscher"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Noah Buscher
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img}
								alt="Portrait by Ivana Cajina"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Ivana Cajina
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src="https://source.unsplash.com/tV_1sC603zA/300x500"
								alt="Portrait by Sam Burriss"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Sam Burriss
							</figcaption>
						</figure>
					</div>

					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
								alt="Portrait by Mari Lezhava"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Mari Lezhava
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img}
								alt="Portrait by Ethan Haddox"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Ethan Haddox
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img}
								alt="Portrait by Amir Geshani"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Amir Geshani
							</figcaption>
						</figure>
					</div>

					<div className="gallery__column">
						<figure className="gallery__thumb">
							<img
								src={img}
								alt="Portrait by Guilian Fremaux"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Guilian Fremaux
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src={img}
								alt="Portrait by Jasmin Chew"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Jasmin Chew
							</figcaption>
						</figure>

						<figure className="gallery__thumb">
							<img
								src="https://source.unsplash.com/XZkEhowjx8k/300x500"
								alt="Portrait by Dima DallAcqua"
								className="gallery__image"
							/>
							<figcaption className="gallery__caption">
								Portrait by Dima DallAcqua
							</figcaption>
						</figure>
					</div>
				</div>
			</>
		</div>
	);
};

export default Gallery;
