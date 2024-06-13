import { useState } from 'react';
import React from 'react';
import {
  ImgDotsFirst,
  ImgDotsSecond,
  ImgDotsThird,
  FavoriteHeartIcon,
  EmptyHeartIcon,
} from './CarsItem.styled';
import { IoLocationOutline } from 'react-icons/io5';
import { IoPeopleOutline } from 'react-icons/io5';
import { TbGasStation } from 'react-icons/tb';
import { LiaBedSolid } from 'react-icons/lia';
import { MdOutlineAir } from 'react-icons/md';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa6';

function CarsItem({ item }) {
  const [favorite, setFavorite] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div>
      <div>
        <div>
          <ImgDotsFirst
            onClick={() => setGalleryIndex(0)}
            $active={galleryIndex === 0 ? true : false}
          />
          <ImgDotsSecond
            onClick={() => setGalleryIndex(0)}
            $active={galleryIndex === 1 ? true : false}
          />
          <ImgDotsThird
            onClick={() => setGalleryIndex(0)}
            $active={galleryIndex === 2 ? true : false}
          />
        </div>
        <img
          src={
            item.gallery[galleryIndex]
              ? item.gallery[galleryIndex]
              : defaultCars
          }
          alt={item.name}
          loading="lazy"
        />
        <div> {favorite ? <FavoriteHeartIcon /> : <EmptyHeartIcon />}</div>
      </div>
      <div>
        <div>
          <div>{item?.name}</div>
          <div>{item?.price}</div>
        </div>
        <div>
          <div>
            <div></div>
            <div>{item?.rating}</div>
          </div>
          <div> ({item?.reviews.length} Reviews)</div>
          <div>
            <div>
              <div></div>
            </div>
            <div>{item?.location}</div>
          </div>
        </div>
        <div>{item?.description}</div>
        <div>
          <div>
            <IoPeopleOutline />
            <div> {item?.adults} Adults</div>
          </div>
          <div>
            <TbAutomaticGearbox />
            <div> {item?.transmission}</div>
          </div>
          <div>
            <TbGasStation />
            <div> {item?.engine}</div>
          </div>
          <div>
            <TbToolsKitchen2 />
            <div>Kitchen</div>
          </div>
          <div>
            <LiaBedSolid />
            <div> {item?.details?.beds} Beds</div>
          </div>
          <div>
            <MdOutlineAir />
            <div>AC</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsItem;
