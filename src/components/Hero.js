import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold">Niraj Kumar Singh</h1>
      <p className="mt-4 text-xl text-gray-400">Sr. Software Developer | Backend Specialist</p>
      <p className="mt-2 max-w-2xl text-gray-500">
        Building scalable microservices using Node.js, NestJS, Express, Docker, Kafka, and MQTT.
      </p>
    </section>
  );
}

export default Hero; 