import React from 'react'
import SingleFaq from './SingleFaq';

function Faq() {
  const faqs = [
    {
      question:
        "Who can be treated at Omni Addiction & Mental Health Services, LLC? ",
      answer:
        "Adults aged 18-65 can receive treatment for mental health and/or substance use issues. Adolescents aged 14 and up with substance use issues can receive treatment at Omni AMH. We have recently added services to include providing therapy for children as young as 11 years old with mental health issues.",
    },
    {
      question: "What treatment issues do you address? ",
      answer: [
        "Anxiety",
        "Bipolar Disorders",
        "Depression",
        "General Support",
        "Grief/Bereavement",
        "LGBTQ Issues",
        "Men's Issues",
        "Obesssive Compulsive Disorders",
        "Postraumatic Stress Disorder",
        "Substance Use",
        "Women's Issue",
        "And more...",
      ],
    },
    {
      question:
        "Does Omni Addiction & Mental Health Services offer virtual sessions? ",
      answer: "Yes Omni offers both virtual and in-person sessions.",
    },
    {
      question: "What are your rates for services?",
      answer: [
        "Individual therapy up to $135.00/ session, after intake",
        "Group therapy $35/session, after intake",
        "Family therapy up to $165/session, after intake",
        "*There are additional fees for miscellaneous items, such as court reporting or appearances.*",
      ],
    },
    {
      question: "What are the benefits of treatment? ",
      answer:
        "Improved family & intimate relationships, Improved quality of life, Better Coping skills, Improved Communication skills, Substance Use cessation.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept cash, checks, Health Savings Accounts, and all major credit cards.",
    },
    {
      question: "Do you accept insurance? ",
      answer:
        "Yes, Omni AMHS accepts most major insurances and Medicaid. Omni AMHS is not a Medicare provider.",
    },
    {
      question: "What if my insurance has changed?",
      answer:
        "Please let us know immediatedly if there are any changes to your insurance coverage. We make every effort to promptly and accurately submit claims, but unpaid balances do remain the individuals responsiblity.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "If you need to cancel or reschedule a session, I ask that you provide 24 hours’ notice. If you miss a session without canceling, or cancel with less than 24 hours’ notice, my policy is to collect $75.00 (unless we both agree that you were unable to attend due to circumstances beyond your control). It is important to note that insurance companies do not provide reimbursement for cancelled sessions. If you are paying via private insurance, you may be assessed a No Show/Late Cancel Fee per a third-party provider network, such as Sondermind or Headway. I will work to find another time to reschedule the appointment. If you are late, your appointment still needs to end on time.",
    },
    {
      question: "What if I am late to my appointment?",
      answer:
        "You are responsible for arriving on time. If you arrive late, your appointment will still need to end at the scheduled time.",
    },
  ];
  return (
    <div className=" py-24 bg-[#018183]" id="faqs">
      <div className="w-[90vw] max-w-[1400px] mx-auto flex justify-between items-center flex-col md:flex-row gap-24">
        <h3 className="text-center md:text-left text-5xl  text-black font-semibold py-12 flex flex-col gap-4">
          <span>Frequently</span> <span>Asked</span> <span>Questions</span>
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4 ">
          {faqs.map((faq, index) => {
            return <SingleFaq key={index} {...faq} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Faq