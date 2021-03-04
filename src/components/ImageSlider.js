import React from 'react';

import axios from 'axios';

import {SliderBox} from 'react-native-image-slider-box';

//

export default class ImageSliderComponent extends React.Component {
  state = {
    images: [
      'https://wallpaper-house.com/data/out/7/wallpaper2you_147291.jpg',
      'https://wallpaper-house.com/data/out/7/wallpaper2you_147295.jpg',
      'https://wallpaper-house.com/data/out/7/wallpaper2you_147298.jpg',
      'https://wallpaper-house.com/data/out/7/wallpaper2you_147301.jpg',
      'https://wallpaper-house.com/data/out/7/wallpaper2you_147306.jpg',
      'https://wallpaper-house.com/data/out/7/wallpaper2you_147310.jpg',

      /* 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7noIi7FClL8I8Op_kfaUjdBBNV-BnmGl1LQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkjmSbqWCFdcpvn5z-XQd66opvDugGsSwsQ&usqp=CAU',
      'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4416/674416-h',
      'https://qqcdnpictest.mxplay.com/pic/484f535d77542bca63e21efb896f4cd6/en/2x3/320x480/0b192c87e58113035031e044bfec3300_1280x1920.webp',
      'https://2.bp.blogspot.com/-fzLHr4I9FRE/V8hEk82RdPI/AAAAAAAAAiE/86V9z4tFmCojCsWi9f0htQz_2YnBanBiACLcB/s1600/English%2BMovie%2Bposter.jpg',
      'https://images.desimartini.com/media/versions/main/movie_jsarea/2017-12/714ff4c0-8796-4630-97ab-6e46a038f838_movie_jsarea.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcP_LBDpD0fQ69gG_ZNBIoqD7LzIs_DEEIyg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7Exknv4CmG9ax_Chu0NEC2L3Z-fHjwgBzg&usqp=CAU',
      'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/krack-et00117305-04-01-2021-07-06-34.jpg',
      'https://assetscdn1.paytm.com/images/cinema/Uppena--1035x420-f7f79e8f-6525-45eb-b45c-3c273ed137f3.jpg',
      'https://1847884116.rsc.cdn77.org/telugu/gallery/movies/kgfhapter2_2021/poster.jpg',
      'https://1847884116.rsc.cdn77.org/telugu/gallery/movies/Acharya2020/poster.jpg',
      'https://1847884116.rsc.cdn77.org/telugu/gallery/movies/naarappa2020/poster.jpg', */
    ],
  };
  /* componentDidMount() {
    axios
      .get('https://www.sustowns.com/Sustownsservice/banner_images')
      .then((response) => {
        let images = [];
        response.data['slider_image'].map((item) => {
          images.push(response.data['image_path'] + item.image);
        });
        this.setState({images: images});
      })
      .catch((error) => {
        console.log(error);
      });
  } */
  render() {
    return <SliderBox autoplay loop images={this.state.images} />;
  }
}
