import React from 'react';

const cards = [
  {
    title: 'Clinic Location',
    lines: [
      'NMC Specialty Hospital, Dubai',
      'Al Nahda 2, Dubai, UAE',
      'Providing comprehensive pediatric, neonatal & emergency care in a modern clinical environment.'
    ],
    action: { label: 'CONTACT US', href: '/contact' }
  },
  {
    title: 'Schedule an Appointment',
    lines: [
      'NMC Specialty Hospital, Dubai',
      'Mon - Sat',
      '5.30PM - 9.00PM',
      'For consultations, vaccinations, newborn care & pediatric follow-ups.'
    ],
    action: null
  },
  {
    title: 'Contact Details',
    lines: [
      'For appointments and urgent queries:',
      '8001999',
    ],
    action: null
  }
];

export default function HeroCards() {
  return (
    <div className="w-full  py-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#364F59] text-white p-6  shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
            <div className="space-y-1 text-sm opacity-90">
              {card.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            {card.action && (
              <a
                href={card.action.href}
                className="mt-4 inline-block items-center gap-2 px-4 py-2 border-2 border-white text-white font-medium  transition"
              >
                {card.action.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
