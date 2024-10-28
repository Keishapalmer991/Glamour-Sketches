import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import ROYALDRESSDISPLAY from '../../assets/royal_dress_display.jpeg';
import REDROYALDRESSONE from '../../assets/red_royal_dress_1.jpeg';
import REDROYALDRESSTWO from '../../assets/red_royal_dress_2.jpeg';
import REDROYALDRESSTHREE from '../../assets/red_royal_dress_3.jpeg';
import BELLSLEEVEDISPLAY from '../../assets/bell_sleeve_display.jpeg';
import BLUEBELLSLEEVEONE from '../../assets/blue_bell_sleeve_1.jpeg';
import BLUEBELLSLEEVETWO from '../../assets/blue_bell_sleeve_two.jpeg';
import LENGTHLONGSLEEVEDISPLAY from '../../assets/length_long_sleeve_display.jpeg';
import WHITELENGTHLONGSLEEVEONE from '../../assets/length_long_sleeve_1.jpeg';
import WHITELENGTHLONGSLEEVETWO from '../../assets/length_long_sleeve_2.jpeg';
import MEXICANDRESSDISPLAY from '../../assets/mexican_dress_display.jpeg';
import WHITEMEXICANDRESSONE from '../../assets/mexican_dress_1.jpeg';
import WHITEMEXICANDRESSTWO from '../../assets/mexican_dress_2.jpeg';
import WHITEMEXICANDRESSTHREE from '../../assets/mexican_dress_3.jpeg';
import WHITEMEXICANDRESSFOUR from '../../assets/mexican_dress_4.jpeg';
import CAPS from '../../assets/caps.jpg';
import BLUEHATONE from '../../assets/blue_hat_1.jpg';
import IMG8 from '../../assets/home_section_eight.jpg';

const cataloguesData = [
    {
      id: 1,
      name: 'Royal Dresses',
      image: ROYALDRESSDISPLAY,
      listings: [
        {
          id: 101,
          title: 'Red Royal Dress',
          images: [REDROYALDRESSONE, REDROYALDRESSTWO, REDROYALDRESSTHREE],
        },
      ],
    },
    {
      id: 2,
      name: 'Bell Sleeves',
      image: BELLSLEEVEDISPLAY,
      listings: [
        {
          id: 201,
          title: 'Blue Bell Sleeve',
          images: [BLUEBELLSLEEVEONE, BLUEBELLSLEEVETWO],
        },
      ],
    },
    {
        id: 3,
        name: 'Length Long Sleeves',
        image: LENGTHLONGSLEEVEDISPLAY,
        listings: [
          {
            id: 301,
            title: 'White Length Long Sleev',
            images: [WHITELENGTHLONGSLEEVEONE, WHITELENGTHLONGSLEEVETWO],
          },
        ],
      },
    {
        id: 4,
        name: 'Mexican Dresses',
        image: MEXICANDRESSDISPLAY,
        listings: [
          {
            id: 401,
            title: 'White Mexican Dress',
            images: [WHITEMEXICANDRESSONE, WHITEMEXICANDRESSTWO, WHITEMEXICANDRESSTHREE, WHITEMEXICANDRESSFOUR],
          },
        ],
      },
];  

const HomeSectionSeven = () => {
  const [selectedCatalogue, setSelectedCatalogue] = useState(null); // For modal
  const [filter, setFilter] = useState(''); // For filtering catalogues
  const [search, setSearch] = useState(''); // For searching within listings

  const filteredCatalogues = cataloguesData.filter(catalogue =>
    catalogue.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full bg-[#d3a2ad]">
      {/* Adjuster */}
      <div className="max-w-[1200px] py-[25px] md:py-[40px] relative z-[1] w-[90%] mx-auto">
        {/* heading */}
        <h1 className="text-[3rem] text-center pacifico-regular">Our Catalogues</h1>
        
        {/* Filter Dropdown */}
        <select
          className="p-2 mb-4 border border-gray-300 w-full text-[1.4rem] md:w-auto"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Catalogues</option>
          {cataloguesData.map(catalogue => (
            <option key={catalogue.id} value={catalogue.name}>
              {catalogue.name}
            </option>
          ))}
        </select>

        {/* Catalogue Slider */}
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}>
          {filteredCatalogues.map(catalogue => (
            <SwiperSlide key={catalogue.id}>
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedCatalogue(catalogue)}
              >
                <img
                  src={catalogue.image}
                  alt={catalogue.name}
                  className="w-full min-h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h3 className="absolute inset-0 flex justify-center items-center text-white text-[2rem]">
                  {catalogue.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal for Catalogue Listings */}
        {selectedCatalogue && (
          <div className="fixed w-full inset-0 bg-[#0000007c] bg-opacity-75 flex justify-center items-center z-[2]">
            <div className="bg-white mt-[5vh] p-[2rem] overflow-y-hidden h-[80vh] rounded-lg max-w-[512px] w-[90%] mx-auto relative">
                {/* Close Modal */}
                <button
                    onClick={() => setSelectedCatalogue(null)}
                    className="absolute text-[3rem] top-2 right-2 font-bold"
                >
                    &times;
                </button>
                {/* Search Bar */}
                <input
                    type="text"
                    className="p-2 border mt-[30px] text-[1.4rem] border-gray-300 w-full mb-4"
                    placeholder="Search listings..."
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="h-[80%] overflow-y-scroll">
                    {/* Filtered Listings */}
                    {selectedCatalogue.listings
                    .filter(listing =>
                        listing.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((listing) => (
                        <div key={listing.id} className="mb-6">
                        {/* Listing Title */}
                        <h3 className="text-[1.8rem] font-semibold mb-2">{listing.title}</h3>

                        {/* Listing Images Swiper */}
                        <Swiper spaceBetween={10} slidesPerView={1}>
                            {listing.images.map((image, i) => (
                            <SwiperSlide key={i}>
                                <img
                                src={image}
                                alt={listing.title}
                                className="min-h-[150px] object-cover"
                                />
                            </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Divider */}
                        <hr className="my-4 border-gray-300" />
                        </div>
                    ))}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSectionSeven;
