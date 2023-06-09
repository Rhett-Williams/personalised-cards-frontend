import React, { useEffect } from 'react'
import Iphone14 from '../assets/iphones/Iphone14'
import Iphone14Pro from '../assets/iphones/Iphone14pro'
import Iphone14ProMax from '../assets/iphones/Iphone14promax'
import Iphone14plus from '../assets/iphones/Iphone14plus'
import Iphone13pro from '../assets/iphones/Iphone13pro'
import Iphone13promax from '../assets/iphones/Iphone13promax'
import Iphone13 from '../assets/iphones/Iphone13'
import Iphone13mini from '../assets/iphones/Iphone13mini'
import Iphone12promax from '../assets/iphones/Iphone12promax'
import Iphone12pro from '../assets/iphones/Iphone12pro'
import Iphone12 from '../assets/iphones/Iphone12'
import Iphone12mini from '../assets/iphones/Iphone12mini'
import Iphone11Pro from '../assets/iphones/Iphone.11pro'
import Iphone11promax from '../assets/iphones/Iphone11promax'
import Iphone11 from '../assets/iphones/Iphone11'
import Iphonese2020 from '../assets/iphones/Iphonese2020'
import Iphonexr from '../assets/iphones/Iphonexr'
import Iphonexs from '../assets/iphones/Iphonexs'
import Iphonexsmax from '../assets/iphones/Iphonexsmax'
import Iphonex from '../assets/iphones/Iphonex'

type Props = {
    label: string
    image: string
}

const PhoneUtil = ({label, image}: Props) => {
    const getPhoneBackground = () => {
        switch (label) {
            case 'iPhone 14 Pro':
                return <Iphone14Pro backgroundImage={image}/>;
            case 'iPhone 14 Pro Max':
              return <Iphone14ProMax backgroundImage={image}/>;
            case 'iPhone 14':
              return <Iphone14 backgroundImage={image}/>;
            case 'iPhone 14 Plus':
              return <Iphone14plus backgroundImage={image}/>;
            case 'iPhone 13 Pro':
              return <Iphone13pro backgroundImage={image}/>;
            case 'iPhone 13 Pro Max':
              return <Iphone13promax backgroundImage={image}/>;
            case 'iPhone 13':
              return <Iphone13 backgroundImage={image} />;
            case 'iPhone 13 Mini':
              return <Iphone13mini backgroundImage={image} />;
            case 'iPhone 12 Pro':
              return <Iphone12pro backgroundImage={image}/>;
            case 'iPhone 12 Pro Max':
              return <Iphone12promax backgroundImage={image} />;
            case 'iPhone 12':
              return <Iphone12 backgroundImage={image}/>;
            case 'iPhone 12 Mini':
              return <Iphone12mini backgroundImage={image}/>;
            case 'iPhone SE (2020)':
              return <Iphonese2020 backgroundImage={image}/>;
            case 'iPhone 11 Pro':
              return <Iphone11Pro backgroundImage={image}/>;
            case 'iPhone 11 Pro Max':
              return <Iphone11promax backgroundImage={image}/>;
            case 'iPhone 11':
              return <Iphone11 backgroundImage={image}/>;
            case 'iPhone XR':
              return <Iphonexr backgroundImage={image}/>;
            case 'iPhone XS':
              return <Iphonexs backgroundImage={image}/>;
            case 'iPhone XS Max':
              return <Iphonexsmax backgroundImage={image}/>;
            case 'iPhone X':
              return <Iphonex backgroundImage={image}/>;
            default:
              return null;
          }
    }

    return getPhoneBackground()
}

export default PhoneUtil