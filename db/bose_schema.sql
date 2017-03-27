DROP TABLE IF EXISTS headphones, pictures;

/*~~~~~~~~~~~~~~~~~~~*
Headphone Type Table
*~~~~~~~~~~~~~~~~~~~~*/
CREATE TABLE headphones (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255)
);

INSERT INTO headphones (type) VALUES
('sound true on ear'),
('sound link on ear'),
('quietcomfort'),
('freestyle earbuds'),
('sound true around ear');
/*~~~~~~~~~~~~~~~~~~~*
Headphone Route Table
*~~~~~~~~~~~~~~~~~~~~*/

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    view VARCHAR(255),
    name VARCHAR(255),
    photo VARCHAR(255),
    headphoneid INTEGER REFERENCES headphones(id)
);

INSERT INTO pictures (view, name, photo, headphoneid) VALUES
('Root', 'Purple Headphones', '../assets/images/soundTrueOnEar/headphones.png', 1),
('Root', 'Sound Link On Ear White', '../assets/images/soundLinkOnEar/soundLinkOnEarHeadphones.png', 2),
('Root', 'Quiet Comfort Black', '../assets/images/quietComfort/quietComfortHeadphones.png', 3),
('Root','Freestyle EarBuds Ice Blue', '../assets/images/freeStyle/freeStyleBuds.png', 4),
('Root', 'Sound True Around Ear Black', '../assets/images/soundTrueAroundEar/soundTrueAroundEarHeadphones.png', 5),
('Home', 'Purple Headphones', '../assets/images/soundTrueOnEar/headphones.png', 1),
('In Tune ','Wire Closeup', '../../assets/images/soundTrueOnEar/inTuneHeadphonesWire.png', 1),
('Powerful Sound','Folded Purple Headphones', '../../assets/images/soundTrueOnEar/powerfulSoundHeadphones.png', 1),
('Colors','Purple Headphones', '../../assets/images/soundTrueOnEar/colorPicker/purple.png', 1),
('Colors', 'Black Headphones', '../../assets/images/soundTrueOnEar/colorPicker/black.png', 1),
('Colors','Teal Headphones', '../../assets/images/soundTrueOnEar/colorPicker/teal.png', 1),
('Colors','White Headphones', '../../assets/images/soundTrueOnEar/colorPicker/white.png', 1),
('Colors','Purple Schema', '../../assets/images/soundTrueOnEar/colorPicker/schemePurple.png', 1),
('Colors','Black Schema', '../../assets/images/soundTrueOnEar/colorPicker/schemeBlack.png', 1),
('Colors','Teal Schema', '../../assets/images/soundTrueOnEar/colorPicker/schemeTeal.png', 1),
('Colors', 'White Schema','../../assets/images/soundTrueOnEar/colorPicker/schemeWhite.png', 1),
('Gallery', 'Drummer Pic','../assets/images/soundTrueOnEar/gallery/videoStill.jpg', 1),
('Gallery', 'White Headphones With Wheel','../assets/images/soundTrueOnEar/gallery/whiteWithWheel.jpg', 1),
('Gallery', 'Purple Headphones With Case','../assets/images/soundTrueOnEar/gallery/purpleWithCase.jpg', 1),
('Carousel', 'White Headphones With Wheel','../../../assets/images/soundTrueOnEar/gallery/whiteWithWheel.jpg', 1),
('Carousel', 'Purple Headphones Girl Gazing','../../../assets/images/soundTrueOnEar/gallery/gazingWithPurple.jpg', 1),
('Carousel', 'Teal Headphones Girl Smiling','../../../assets/images/soundTrueOnEar/gallery/smilingWithTeal.jpg', 1),
('Carousel', 'Black Headphones Guy With Guitar','../../../assets/images/soundTrueOnEar/gallery/blackHeadphonesWithGuitar.jpg', 1),
('Carousel', 'Teal Headphones Girl Dancing','../../../assets/images/soundTrueOnEar/gallery/dancingWithTeal.jpg', 1),
('Carousel', 'Teal Headphones Girl Closeup','../../../assets/images/soundTrueOnEar/gallery/closeupGirlWithTeal.jpg', 1),
('Carousel', 'Black Headphones Guy Gazing','../../../assets/images/soundTrueOnEar/gallery/gazingGuyWithBlack.jpg', 1),
('Carousel_2', 'Purple Headphones With Case','../../../assets/images/soundTrueOnEar/gallery/purpleWithCase.jpg', 1),
('Carousel_2', 'Pile Of Headphones','../../../assets/images/soundTrueOnEar/gallery/allColorsPile.jpg', 1),
('Carousel_2', 'Black Headphones With Case','../../../assets/images/soundTrueOnEar/gallery/blackHeadphonesWithCase', 1),
('Carousel_2', 'Black Headphones Folded','../../../assets/images/soundTrueOnEar/gallery/blackFoldedHeadphonesWithCase.jpg', 1),
('Carousel_2', 'All Headphone Colors','../../../assets/images/soundTrueOnEar/gallery/allColors.jpg', 1),
('Dimensions', 'Purple Headphones Dimensions','../assets/images/soundTrueOnEar/dimensionsHeadphones.png', 1),
('Dimensions', 'Checkmarks','../assets/images/tick-small.png', 1),
('Dimensions', 'White Headphones In Case','../assets/images/soundTrueOnEar/carryingCase.png', 1);



