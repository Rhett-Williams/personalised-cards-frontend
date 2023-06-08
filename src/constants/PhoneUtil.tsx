import React, { useEffect } from 'react'
import Iphone14 from '../assets/iphones/Iphone14'
import Iphone14Pro from '../assets/iphones/Iphone14pro'
import Iphone14ProMax from '../assets/iphones/Iphone14promax'

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
            // case 'iPhone 14 Plus':
            //   return <iphone14plus />;
            // case 'iPhone 13 Pro':
            //   return <iphone13pro />;
            // case 'iPhone 13 Pro Max':
            //   return <iphone13promax />;
            // case 'iPhone 13':
            //   return <iphone13 />;
            // case 'iPhone 13 Mini':
            //   return <iphone13mini />;
            // case 'iPhone 12 Pro':
            //   return <iphone12pro />;
            // case 'iPhone 12 Pro Max':
            //   return <iphone12promax />;
            // case 'iPhone 12':
            //   return <iphone12 />;
            // case 'iPhone 12 Mini':
            //   return <iphone12mini />;
            // case 'iPhone SE (2020)':
            //   return <iphonese2020 />;
            // case 'iPhone 11 Pro':
            //   return <iphone11pro />;
            // case 'iPhone 11 Pro Max':
            //   return <iphone11promax />;
            // case 'iPhone 11':
            //   return <iphone11 />;
            // case 'iPhone XR':
            //   return <iphonexr />;
            // case 'iPhone XS':
            //   return <iphonexs />;
            // case 'iPhone XS Max':
            //   return <iphonexsmax />;
            // case 'iPhone X':
            //   return <iphonex />;
            // default:
            //   return null;
          }
    }

    return getPhoneBackground()
}

export default PhoneUtil