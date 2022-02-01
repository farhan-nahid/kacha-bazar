import { faClipboardList, faHome, faPlus, faQuoteLeft, faSignOutAlt, faTasks, faUserEdit, faUserPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { emptyCart } from '../../../redux/feathers/productsSlice';
import DailyNeeds from '../../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../../SharedComponents/Footer/Footer';
import TopNavigation from '../../SharedComponents/TopNavigation/TopNavigation';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { logOut, isAdmin } = useAuth();
  const dispatch = useDispatch();

  const signOut = () => {
    logOut();
    dispatch(emptyCart());
  };

  useEffect(() => {
    document.title = 'Dashboard | Kacha Bazar';
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <section id={styles.dashboard}>
        <Container>
          <Row>
            <Col lg={3}>
              <aside>
                <NavLink to='/dashboard/profile' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  <span>
                    <FontAwesomeIcon icon={faUserTie} />
                  </span>
                  Profile
                </NavLink>
                {!isAdmin ? (
                  <>
                    <NavLink to='/dashboard/my-orders' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <FontAwesomeIcon icon={faTasks} />
                      </span>
                      My Orders
                    </NavLink>
                    <NavLink to='/dashboard/review' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                      Review
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to='/dashboard/add-product' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                      Add Product
                    </NavLink>
                    <NavLink to='/dashboard/manage-orders' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <FontAwesomeIcon icon={faClipboardList} />
                      </span>
                      Manage Orders
                    </NavLink>
                    <NavLink to='/dashboard/make-admin' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <FontAwesomeIcon icon={faUserPlus} />
                      </span>
                      Add Admin
                    </NavLink>
                    <NavLink to='/dashboard/edit-profile' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                      <span>
                        <FontAwesomeIcon icon={faUserEdit} />
                      </span>
                      Edit Profile
                    </NavLink>
                  </>
                )}

                <NavLink to='/' onClick={signOut}>
                  <span>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                  Log Out
                </NavLink>
                <NavLink to='/' className={(navInfo) => (navInfo.isActive ? styles.active : '')}>
                  <span>
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  Back Home
                </NavLink>
              </aside>
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

export default Dashboard;
