import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../AboutUsPage/Banner/Banner';
import DailyNeeds from '../SharedComponents/DailyNeeds/DailyNeeds';
import Footer from '../SharedComponents/Footer/Footer';
import TopNavigation from '../SharedComponents/TopNavigation/TopNavigation';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Kacha Bazar';
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <TopNavigation />
      <Banner text='Privacy Policy' />
      <Container id={styles.privacy__policy}>
        <h3> Last updated: October 31, 2021</h3>
        <p>
          At KachaBazar, accessible from kacha bazar dot com, one of our main priorities is the privacy of our visitors. This Privacy Policy document
          contains types of information that is collected and recorded by KachaBazar and how we use it. If you have additional questions or require
          more information about our Privacy Policy, do not hesitate to contact us.we may receive additional information about you such as your name,
          email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to
          provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address,
          email address, and telephone number.
        </p>

        <p className='mt-3'>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they
          shared and/or collect in KachaBazar.we may receive additional information about you such as your name, email address, phone number, the
          contents of the message and/or attachments you may send us, we may ask for your contact information, including items such as name, company
          name, address, email address, and telephone number. This policy is not applicable to any information collected offline or via channels other
          than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.
        </p>

        <h3>Consent</h3>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h3>Information we collect</h3>
        <p>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the
          point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such may
          choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name,
          address, email address, and telephone number.
        </p>
        <p className='mt-3'>
          Please note that the Company will not ask you to share any sensitive data or information via email or telephone. If you receive any such
          request by email or telephone, please do not respond/divulge any sensitive data or information and forward the information relating to the
          same to
        </p>

        <h3>Log Files</h3>
        <p>
          KachaBazar follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this
          and a part of hosting. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service
          Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that
          is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the
          website, and gathering demographic information.
        </p>

        <h3>Advertising Partners Privacy Policies</h3>
        <p>
          You may consult this list to find the Privacy Policy for each of the advertising partners of KachaBazar. Third-party ad servers or ad
          networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear
          on KachaBazar, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies
          are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites
          that you visit. Note that KachaBazar has no access to or control over these cookies that are used by third-party advertisers.
        </p>

        <h3>Third Party Privacy Policies</h3>
        <p>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on KachaBazar, which are sent directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit. Note that KachaBazar has no access to or control over these cookies that are
          used by third-party advertisers.
        </p>
        <p className='mt-3'>
          KachaBazar's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out
          of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about
          cookie management with specific web browsers, it can be found at the browsers' respective websites.
        </p>

        <h3>CCPA Privacy Rights</h3>
        <p>
          Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a business has collected about consumers. Request that a business delete
          any personal data about the consumer that a business has collected. Request that a business that sells a consumer's personal data, not sell
          the consumer's personal data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
          please contact us.
        </p>
        <h3>Children's Information</h3>
        <p>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.Request that a business delete any personal data about the consumer that a
          business has collected. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
          please contact us.
        </p>
        <p className='mt-3'>
          KachaBazar does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child
          provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to
          promptly remove such information from our records.
        </p>
      </Container>
      <DailyNeeds />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
