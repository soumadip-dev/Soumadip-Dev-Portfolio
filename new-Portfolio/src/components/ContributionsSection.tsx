import React from 'react';

const ContributionsSection = () => {
  return (
    <section className="container py-12">
      <h2 className="text-sm font-medium text-muted-foreground mb-6">Technical Contributions</h2>

      <div className="space-y-6 text-foreground leading-relaxed">
        <p>
          <span className="font-semibold text-primary">At Turbo ML,</span> I spent 3 months building
          some pretty cool stuff. Think Redis Sorted Sets handling time-based tasks under 24-hour
          constraints, WhatsApp Business API integrations with custom commands, and secure MCP
          protocols using hash-based user identification. The kind of work that keeps you up at
          night because it's actually interesting.
        </p>

        <p>
          <span className="font-semibold">Here's where it gets interesting</span> I reverse
          engineered Blinkit and Swiggy APIs to understand their data structures and endpoints, then
          created an AI agent that could intelligently route food delivery and grocery orders. Not
          your typical API integration tutorial this was about understanding how these platforms
          really work under the hood and building something smarter on top of it.
        </p>

        <p>
          <span className="text-primary">0→1</span>{' '}
          <span className="font-semibold">product development</span> specialist for startups and
          personal projects. Faster iterations, clearer outcomes.
        </p>
      </div>
    </section>
  );
};

export default ContributionsSection;
