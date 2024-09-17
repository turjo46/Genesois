import React from 'react';

const PricingPlans = () => {
  const plans = [
    {
        price: 480,
      name: 'Starter Plan',
     
      features: [
        { text: 'Creative Business Consulting', included: true },
        { text: 'Make a Perfect Corporate Office', included: true },
        { text: 'Powerfull Management', included: false },
        { text: 'Position Your Business Growth', included: false },
        { text: 'Consulting Service Provider', included: false }
      ],
    },
    {
      name: 'Basic Plan',
      price: 750,
      features: [
        { text: 'Creative Business Consulting', included: true },
        { text: 'Make a Perfect Corporate Office', included: true },
        { text: 'Powerfull Management', included: true },
        { text: 'Position Your Business Growth', included: true },
        { text: 'Consulting Service Provider', included: false }
      ],
    },
    {
      name: 'Advanced Plan',
      price: 860,
      features: [
        { text: 'Creative Business Consulting', included: true },
        { text: 'Make a Perfect Corporate Office', included: true },
        { text: 'Powerfull Management', included: true },
        { text: 'Position Your Business Growth', included: true },
        { text: 'Consulting Service Provider', included: true }
      ],
    }
  ];

  return (
    <div className="flex justify-center space-x-8 p-10 bg-white">
      {plans.map((plan, index) => (
        <div key={index} className="border-2 border-gray-200 rounded-none shadow-3xl w-96 ">
            <div className="text-center py-8">
            <h3 className="text-6xl font-bold text-[#0b2239]">${plan.price}</h3>
            <p className="text-[#0b2239]">/ Per Month</p>
          </div>
          <div className="bg-orange-500 text-white text-center py-4">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
          </div>
          
          <ul className="px-8 py-4 space-y-8 text-center font-semibold">
            {plan.features.map((feature, idx) => (
              <li key={idx} className={`${feature.included ? 'text-gray-600' : 'text-gray-600 line-through font-bold'}`}>
                {feature.text}
              </li>
            ))}
          </ul>
          <div className="text-center py-4  h-28 ">
            <button className="bg-orange-500 h-14 w-52 text-white py-2 px-6 rounded-md hover:bg-[#0b2239]">PURCHASE NOW</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
