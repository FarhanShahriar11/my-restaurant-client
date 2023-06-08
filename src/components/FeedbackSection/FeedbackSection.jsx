import React from 'react';

const FeedbackSection = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'The food was absolutely delicious! I highly recommend this restaurant to everyone.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2xlJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Great service and a wonderful dining experience. Will definitely visit again!',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      feedback: 'I was impressed by the quality of the dishes and the attention to detail. Amazing!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1611337794745-569c3e91bd53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      feedback: 'The ambiance of the restaurant is simply outstanding. A perfect place for a romantic dinner.',
      rating: 4,
      image: '/images/feedback4.jpg',
    },
    {
      id: 5,
      name: 'David Wilson',
      feedback: 'The staff was very friendly and accommodating. They made us feel right at home.',
      rating: 5,
      image: '/images/feedback5.jpg',
    },
    {
      id: 6,
      name: 'Emily Brown',
      feedback: 'The presentation of the dishes was impeccable. It felt like a work of art on a plate.',
      rating: 4.5,
      image: '/images/feedback6.jpg',
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Customer Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img src={feedback.image} alt={feedback.name} className="rounded-full w-12 h-12" />
                <h3 className="text-lg font-semibold ml-4">{feedback.name}</h3>
              </div>
              <p className="text-gray-700">{feedback.feedback}</p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500">{Array.from({ length: feedback.rating }, (_, index) => <i key={index} className="fas fa-star"></i>)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
