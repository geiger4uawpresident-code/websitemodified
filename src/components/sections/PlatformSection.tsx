import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function PlatformSection() {
  const PLATFORM_DOC_URL =
    'https://drive.google.com/file/d/17TAoEi6PVHGfmEarkiki1ENeFMKBMhtj/view?usp=sharing';

  const platformSections = [
    {
      number: '01',
      title: 'Clean Governance and Institutional Reform',
      subtitle: 'The Promise was Reform. It’s Time We Deliver It.',
      challenge: `The Independent Monitor found: an ongoing culture of fear, retaliation, manipulation of compliance, and weakened financial oversight. This was not just about bad individuals — it was a system of unaccountable power that operated without a budget, without transparency, and without consequence. Members voted for reform. We have an obligation to deliver it. The union is in financial peril and we have to get our house under control.`,
      commitments: [
        `Implement a top-to-bottom audit of the union's spending and push for the adoption of a fully transparent budget. I am prepared to make difficult decisions to restore financial health to our union.`,
        `Install truly independent compliance infrastructure. The current approach has failed; we need oversight with real authority and no relationship to leadership.`,
        `End the culture of retaliation. I will implement a protected, enforceable whistleblower policy and restore staff members who faced retaliation for doing their jobs.`,
        `Depoliticize staff hiring and eliminate non-UAW hires in positions that aren't constitutionally compliant in their requirement of "special skill." I will issue an Administrative Letter that clearly outlines the limited roles that would fall under this provision; implement a defined bid process; and provide contractual protections that guarantee staff the right to return to the bargaining unit after serving in an administration role.`,
        `Engage the UAW Staff Council early and directly. Reform that doesn't include the people doing the daily work of this union is reform that won't stick. An engaged Staff Council provides a natural enforcement mechanism for implemented reforms.`,
      ],
      quote:
        `"Members voted for reform. The Monitor found an ongoing culture of fear and no budget. We owe it to every member to deliver something different — not someday, but on day one."`,
    },

    {
      number: '02',
      title: 'Bargaining: Preparing for the Fights Ahead',
      subtitle:
        'Solidarity is How We Win. Preparation is How We Get There.',
      challenge: `The issues our members are bringing to the bargaining table have never been more complex — and the environment in which we'll fight them has fundamentally shifted.

The last major bargaining cycle produced historic results. A global pandemic forced millions out of the workforce, drove up demand for labor, and created conditions that delivered record contracts. Not just for the UAW, the Teamsters are another high-profile example. Workers achieved significant wage increases, expanded vacation benefits, and expedited healthcare eligibility across the board - union and non-union alike.

But that is not the climate we find ourselves in today. The labor market has softened. Recession risks are rising. Artificial intelligence is advancing without regulation, reshaping job security across every sector faster than most contracts can keep pace. The NLRB — historically labor's backstop for organizing protections and unfair labor practice charges — is both defunded and defunct. Federal funding for higher education is being weaponized as a political tool, threatening these institutions and the jobs of our members who work in them. Public employees face an uphill battle as budget shortfalls mount and tax levies needed to fund our public services increasingly fail at the ballot box.

Acknowledging the magnitude of the fights ahead does not mean we accept defeat. We won’t give up on retirement security — pensions, retiree healthcare, and the ability to afford to leave the workforce. We won’t give up fighting for better work-life balance and accept mandatory overtime and scheduling that serves employers rather than people. To win, we need a multifaceted plan and a leader who isn't mired in controversy and consumed with self-interest to execute it.`,
      commitments: [
        `Honor the member-driven bargaining agenda. During the 2023 Big 3 negotiations, Shawn Fain publicly demanded a 32-hour workweek — a demand that even he called "audacious." It was not a member-driven demand. It was a self-serving press play that generated enormous media coverage, fueled controversy, and went nowhere at the table. The real cost was what it crowded out: mandatory overtime — a real, clearly defined, and winnable issue that members are living every single day. He is now doing it again, calling for a 32-hour work week. We already have a 40-hour work week. What we don't have is meaningful protection against the multiple contract provisions that currently allow employers to schedule workers far beyond that standard. When I am president, I will come to the table with the agenda our members set, not my own.`,
        `Your power. Your choice. No predetermined outcomes. The UAW Constitution requires a two-thirds strike authorization vote before a strike can be called. Shawn Fain publicly committed to a May Day 2028 strike before any member vote. When I am president, no strike will be called without the constitutionally required member authorization.`,
        `Deploy every resource to win — across every sector. When I am president, I will bring every available resource to bear — research, legal, coalition partners, other unions, strategic pressure campaigns, and issue-based political campaigns to strengthen our hand at the bargaining table.`,
        `Respect members’ rights to determine their own bargaining objectives. I will not dictate bargaining objectives. Each sector will determine their own priorities through the special bargaining convention, member surveys, pre-bargaining meetings, and other democratic processes. The right to define what winning looks like belongs to the members — not to the president's social media account. At the same time, I will work to ensure shared high standards across sectors that prevent whipsawing — so that no employer can use one contract to undermine what members have fought to win.`,
        `Come to every fight prepared. Preparation is not a slogan in this campaign — it is a governing standard. That means bargainers who are trained and supported before they walk into a room, member priorities that are researched and documented before a proposal is made, economic data and comparable contracts in hand before an employer sits across from us, and an organizing and political infrastructure actively working to improve the environment at the table before the first session begins. The employers we face are always prepared. Our members deserve a union that is too.`,
        `Lead on AI with substance, not speeches. Ten days ago, Shawn Fain stood in Washington and positioned himself as the workers' champion against AI. The UAW needs to be on the front lines of this fight — our members are at the forefront of the impact. But while Fain rattled his saber in Washington, the Governor of Michigan — a UAW-endorsed candidate elected with the support and resources of our union and its members — was actively courting AI infrastructure in our own backyard, publicly positioning Michigan as a leader in AI while failing to simultaneously lead on worker protections. Shawn Fain has been conveniently silent, choosing to protect a political relationship over our members. That isn't substance — that is showmanship. Members got the speech. Michigan got the sanction. When I am president, I will not choose political relationships over member interests. If we endorse candidates and deploy our resources to elect them, we hold them accountable — publicly, specifically, and without exception.`,
      ],
      quote:
        `"The fights ahead are real. So is our commitment to fighting them on your terms — with your voice, your priorities, and your power leading the way."`,
    },
  ];

  return (
    <section
      id="platform"
      className="py-24 bg-campaign-tan/10 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* SECTION HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase tracking-tight mb-6">
              The 2026 Strategic Reform Platform
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A comprehensive Member-First blueprint designed to restore power,
              transparency, and results to the UAW membership.
            </p>
          </motion.div>

          {/* THREE PILLARS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

            {/* PREPARED */}

            <Card className="border-2 border-campaign-gold/20 rounded-[2rem] shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black uppercase text-campaign-black mb-5">
                  Prepared
                </h3>

                <h4 className="text-lg font-bold text-campaign-gold mb-5">
                  “Preparation is the Foundation of Power”
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  Preparation is not a strategy — it is a standard. It is how
                  you earn respect in rooms that weren't built for you. It is
                  how you walk into a bargaining session, an organizing
                  campaign, or a difficult conversation with the confidence to
                  make the right call instead of the easy one. Every commitment
                  in this platform — trained bargainers, developed leaders,
                  data-driven organizing, researched positions — flows from the
                  same belief: that the people counting on you deserve someone
                  who did the work before they showed up.
                </p>
              </CardContent>
            </Card>

            {/* DEMOCRATIC */}

            <Card className="border-2 border-campaign-gold/20 rounded-[2rem] shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black uppercase text-campaign-black mb-5">
                  Democratic
                </h3>

                <h4 className="text-lg font-bold text-campaign-gold mb-5">
                  “Your Power. Your Choice. Your Union.”
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  Member democracy is not a slogan in this campaign — it is a
                  governing principle with specific, structural commitments
                  behind it. Bargaining agendas set by members, not presidents.
                  Strike authorizations that require member votes, not press
                  releases. CAP resources that respect local autonomy. Retirees
                  with formal voice at the table. Election integrity that gives
                  every candidate a fair shot. This union belongs to its
                  members. Every decision this leadership makes will reflect
                  that.
                </p>
              </CardContent>
            </Card>

            {/* ACCOUNTABLE */}

            <Card className="border-2 border-campaign-gold/20 rounded-[2rem] shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black uppercase text-campaign-black mb-5">
                  Accountable
                </h3>

                <h4 className="text-lg font-bold text-campaign-gold mb-5">
                  “No Excuses. Not for Yourself. Not for this Union.”
                </h4>

                <p className="text-gray-700 leading-relaxed">
                  Accountability starts with the person asking for your trust.
                  It means holding yourself to the highest standard first — not
                  because it is easy, but because credibility cannot be claimed.
                  It can only be built through transparency, follow-through, and
                  the integrity to acknowledge failure and fix it. The members
                  of this union have been lied to, let down, and asked to accept
                  less than they deserve. That ends with leadership that answers
                  for its decisions — every one of them.
                </p>
              </CardContent>
            </Card>

          </div>

          {/* READY TO LEAD */}

          <Card className="bg-white border-2 border-campaign-gold/20 shadow-2xl rounded-[2rem] overflow-hidden mb-16">
            <CardContent className="p-8 md:p-16 flex flex-col items-center text-center">

              <div className="w-20 h-20 bg-campaign-gold/10 rounded-2xl flex items-center justify-center text-campaign-gold mb-8">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-campaign-black uppercase mb-6">
                READY TO LEAD. READY TO DELIVER.
              </h3>

              <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed max-w-3xl">
                Our platform is built on three unbreakable pillars: Prepared,
                Democratic, and Accountable. Explore the full 8-point strategic
                plan for UAW reform and bargaining power.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-black h-16 px-10 text-lg shadow-xl shadow-campaign-gold/20"
              >
                <a
                  href={PLATFORM_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <FileText className="w-5 h-5" />
                  View Full Strategic Platform
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>

            </CardContent>
          </Card>

          {/* FULL PLATFORM */}

          <div className="space-y-10">

            {platformSections.map((section) => (
              <Card
                key={section.number}
                className="border border-campaign-gold/20 rounded-[2rem] shadow-xl overflow-hidden"
              >
                <CardContent className="p-8 md:p-12">

                  <div className="mb-8">

                    <span className="inline-block text-campaign-gold font-black text-sm tracking-widest uppercase mb-3">
                      Reform Pillar {section.number}
                    </span>

                    <h3 className="text-3xl font-black uppercase text-campaign-black mb-4">
                      {section.number} {section.title}
                    </h3>

                    <h4 className="text-xl font-bold text-campaign-gold">
                      {section.subtitle}
                    </h4>

                  </div>

                  <div className="space-y-8 text-gray-700 leading-relaxed">

                    <div>
                      <h5 className="font-black uppercase text-campaign-black mb-3">
                        The Challenge
                      </h5>

                      <p className="whitespace-pre-line">
                        {section.challenge}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-black uppercase text-campaign-black mb-3">
                        Commitments
                      </h5>

                      <ul className="space-y-4 list-disc pl-6">
                        {section.commitments.map((commitment, index) => (
                          <li key={index}>{commitment}</li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-campaign-gold pl-6 italic text-campaign-black font-medium text-lg leading-relaxed">
                      {section.quote}
                    </blockquote>

                  </div>

                </CardContent>
              </Card>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
