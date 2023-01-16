import React from 'react'
import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import CalendlyButton from './CalendlyButton';

function About() {
  return (
    <div
      className="bg-white pb-16 flex flex-col items-center pt-24"
      id="about-us">
      <h2 className="text-5xl text-center pb-16">About Us</h2>
      <div className="flex flex-col lg:flex-row w-[90vw] max-w-[1400px] mx-auto gap-12 ">
        <div className="text-lg mb-8 text-center overflow-hidden">
          <Image
            src={headshot}
            priority
            height={500}
            width={500}
            className="rounded-lg mx-auto"
            alt="LaTeshia A. Gilliam, LPC, LSATP/Owner"
          />
          <h2 className="mt-2">LaTeshia A. Gilliam, LPC, LSATP/Owner</h2>
          <p className="mb-4">SUD/MH Therapist</p>
          <CalendlyButton />
        </div>
        <div className="flex flex-col gap-8 leading-8 w-full">
          <p className="first-letter:font-bold first-letter:text-8xl first-letter:mr-3 first-letter:float-left">
            We are Omni Addiction & Mental Health Services, a private behavioral
            health clinic offering outpatient MentalHealth and Substance Use
            Therapy. Omni AMHS is owned and operated by LaTeshia Gilliam, a
            Licensed Professional Counselor and Licensed Substance Abuse
            Treatment Practitioner who brings 18 years of experience in the
            field of Mental Health and Substance Use treatment through
            therapeutic intervention. I earned my Bachelor of Arts degree in
            Sociology at St. Paul's College in 1999 and later completed the
            requirements for my Master of Science degree in Community & College
            Counseling at Longwood University in 2005. I have work experience
            with community service boards and correctional facilities throughout
            the state of VA.
          </p>
          <p>
            I utilize a range of therapeutic approaches in my service delivery,
            but rely heavily on Cognitive Behavioral Therapy, Motivational
            Interviewing, Mindfulness, Dialectical Behavioral Therapy, and
            Gestalt techniques. I’ve found that helping others gain an increased
            awareness of the negative effects that substance use and mental
            health problems have on the family system have profound positive
            effects on the recovery process. I believe it is best to treat the
            whole person and encourage clients to disclose their full range of
            life issues in therapy.
          </p>
          <p>
            Clients of Omni AMHS can expect to gain knowledge in areas that will
            reveal issues in denial and/or minimization of substance use and/or
            mental health problems, should they exist. Clients will gain a
            better understanding of their diagnosis or dual diagnoses. They can
            expect to gain an acceptance of the fact that recovery from mental
            health and/or substance use problems are a journey; and one that
            they do not have to take alone. I seek to empower, support, and
            provide accountability to each one of my clients as they face life's
            daily challenges and embark on the road to recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About