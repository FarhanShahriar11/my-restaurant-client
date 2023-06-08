import React from 'react';
import { CSSTransition } from 'react-transition-group';
const About = () => {
    return (
        <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">About Us</h2>
        <div className=" flex  flex-wrap items-center">
          <div className="w-full sm:w-1/2 lg:w-2/3">
            <CSSTransition in appear timeout={500} classNames="fade">
              <p className="text-gray-700 leading-relaxed">
                Welcome to our restaurant! We pride ourselves in offering the finest
                dining experience with a touch of elegance. Our team of talented chefs
                prepares each dish with the freshest ingredients, ensuring exquisite
                flavors that will tantalize your taste buds.
              </p>
            </CSSTransition>
            <CSSTransition in appear timeout={500} classNames="fade" delay={200}>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our menu is carefully crafted to cater to diverse palates, offering a
                wide range of culinary delights. From succulent steaks to flavorful
                vegetarian options, we have something to satisfy every craving. Our
                expert sommeliers have curated an impressive wine list, perfectly
                complementing our dishes.
              </p>
            </CSSTransition>
           
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-6 sm:mt-0">
            <CSSTransition in appear timeout={500} classNames="fade" delay={600}>
              <img
                src="https://images.unsplash.com/photo-1628627582892-a7736b5be159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=866&q=80"
                alt="Restaurant Interior"
                className="rounded-lg"
              />
            </CSSTransition>
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;