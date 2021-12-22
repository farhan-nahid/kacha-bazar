import React from 'react';
import { Container, Row } from 'react-bootstrap';
import apple from '../../../assets/images/categories/apple.webp';
import baby from '../../../assets/images/categories/baby.webp';
import beauty from '../../../assets/images/categories/beauty.webp';
import breakfast from '../../../assets/images/categories/Breakfast.webp';
import fruits from '../../../assets/images/categories/cabbage.webp';
import fish from '../../../assets/images/categories/carp-fish.webp';
import cat from '../../../assets/images/categories/cat.webp';
import chili from '../../../assets/images/categories/chili-sauce.webp';
import chips from '../../../assets/images/categories/chips.webp';
import cleaner from '../../../assets/images/categories/cleaner.webp';
import cookie from '../../../assets/images/categories/cookie.webp';
import cooking from '../../../assets/images/categories/Cooking.webp';
import dumbbell from '../../../assets/images/categories/dumbbell.webp';
import honey from '../../../assets/images/categories/honey.webp';
import milk from '../../../assets/images/categories/milk.webp';
import shrimp from '../../../assets/images/categories/shrimp.webp';
import drink from '../../../assets/images/categories/soft-drink.webp';
import jam from '../../../assets/images/categories/strawberry-jam.webp';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './FeaturedCategories.module.css';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Fish & Meat',
      images: fish,
    },
    {
      id: 2,
      name: 'Fruits & Vegetable',
      images: fruits,
    },
    {
      id: 3,
      name: 'Fresh Seafood',
      images: shrimp,
    },
    {
      id: 4,
      name: 'Cooking Essentials',
      images: cooking,
    },
    {
      id: 5,
      name: 'Breakfast',
      images: breakfast,
    },
    {
      id: 6,
      name: 'Drinks',
      images: drink,
    },
    {
      id: 7,
      name: 'Milk & Dairy',
      images: milk,
    },
    {
      id: 8,
      name: 'Organic Food',
      images: apple,
    },
    {
      id: 9,
      name: 'Honey',
      images: honey,
    },
    {
      id: 10,
      name: 'Sauces & Pickles',
      images: chili,
    },
    {
      id: 11,
      name: 'Jam & Jelly',
      images: jam,
    },
    {
      id: 12,
      name: 'Snacks & Instant',
      images: chips,
    },
    {
      id: 13,
      name: 'Biscuits & Cakes',
      images: cookie,
    },
    {
      id: 14,
      name: 'Household Tools',
      images: cleaner,
    },
    {
      id: 15,
      name: 'Baby Care',
      images: baby,
    },
    {
      id: 16,
      name: 'Pet Care',
      images: cat,
    },
    {
      id: 17,
      name: 'Beauty & health',
      images: beauty,
    },
    {
      id: 18,
      name: 'Sports & Fitness',
      images: dumbbell,
    },
  ];

  return (
    <section id={styles.categories}>
      <Container>
        <h3>Featured Categories</h3>
        <p>Choose your necessary products from this feature categories.</p>
        <Row className='mt-3 pb-4 g-4'>
          {
            // map category data
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
