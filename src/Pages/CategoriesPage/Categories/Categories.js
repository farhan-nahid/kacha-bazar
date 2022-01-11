import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { NavLink, Outlet } from 'react-router-dom';
import apple from '../../../assets/images/categories/apple.webp';
import beauty from '../../../assets/images/categories/beauty.webp';
import breakfast from '../../../assets/images/categories/Breakfast.webp';
import vegetable from '../../../assets/images/categories/cabbage.webp';
import fish from '../../../assets/images/categories/carp-fish.webp';
import cooking from '../../../assets/images/categories/Cooking.webp';
import honey from '../../../assets/images/categories/honey.webp';
import milk from '../../../assets/images/categories/milk.webp';
import shrimp from '../../../assets/images/categories/shrimp.webp';
import drink from '../../../assets/images/categories/soft-drink.webp';
import jam from '../../../assets/images/categories/strawberry-jam.webp';
/*
import baby from '../../../assets/images/categories/baby.webp';
import cat from '../../../assets/images/categories/cat.webp';
import chili from '../../../assets/images/categories/chili-sauce.webp';
import chips from '../../../assets/images/categories/chips.webp';
import cleaner from '../../../assets/images/categories/cleaner.webp';
import cookie from '../../../assets/images/categories/cookie.webp';
import dumbbell from '../../../assets/images/categories/dumbbell.webp';

*/
import CartTracker from '../../HomePage/CartTracker/CartTracker';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../../SharedComponents/Footer/Footer';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import TopNavigation from '../../SharedComponents/TopNavigation/TopNavigation';
import styles from './Categories.module.css';

const Categories = () => {
  const [products, setProducts] = useState([]);
  let category = [];

  for (const pd of products) {
    category = [...category, pd.category];
  }

  const uniqueCategory = [...new Set(category)];

  const allPd = [];

  for (const pd of uniqueCategory) {
    if (pd === 'Fresh Vegetable') {
      allPd.push({ name: 'Fresh Vegetable', img: vegetable });
    }
    if (pd === 'Fish and Meat') {
      allPd.push({ name: 'Fish and Meat', img: fish });
    }
    if (pd === 'Organic Food') {
      allPd.push({ name: 'Organic Food', img: apple });
    }
    if (pd === 'Cooking Essentials') {
      allPd.push({ name: 'Cooking Essentials', img: cooking });
    }
    if (pd === 'Breakfast') {
      allPd.push({ name: 'Breakfast', img: breakfast });
    }
    if (pd === 'Drinks') {
      allPd.push({ name: 'Drinks', img: drink });
    }
    if (pd === 'Milk and Dairy') {
      allPd.push({ name: 'Milk and Dairy', img: milk });
    }
    if (pd === 'Honey') {
      allPd.push({ name: 'Honey', img: honey });
    }
    if (pd === 'Jam and Jelly') {
      allPd.push({ name: 'Jam and Jelly', img: jam });
    }
    if (pd === 'Beauty and Health') {
      allPd.push({ name: 'Beauty and Health', img: beauty });
    }
    if (pd === 'Sauces') {
      allPd.push({ name: 'Sauces', img: shrimp });
    }
  }

  useEffect(() => {
    axios
      .get('https://kacha-bazar.herokuapp.com/all-products')
      .then((res) => setProducts(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <>
      <TopNavigation />
      <CartTracker />
      <section id={styles.categories}>
        <Container>
          <Row>
            <Col lg={3}>
              <h3 className='mb-4'>Categories</h3>
              {allPd.length ? (
                <aside id={styles.aside}>
                  {allPd.map((pd, idx) => (
                    <NavLink key={idx} to={`/categories/${pd.name}`} className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <img src={pd.img} alt={pd.name} />
                      </span>
                      {pd.name}
                    </NavLink>
                  ))}
                </aside>
              ) : (
                <LoadingSpinner />
              )}
            </Col>
            <Col lg={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default Categories;
