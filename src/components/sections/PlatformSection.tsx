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
    // ADD THESE OBJECTS INSIDE THE platformSections ARRAY
// AFTER SECTION 02

{
  number: '03',
  title:
    'Staff and Local Leader Development: Building a Culture of Preparation',
  subtitle: 'Train to Prepare. Prepare to Win.',
  challenge: `The UAW's ability to deliver for members depends entirely on the skill and preparation of the people doing the work. A wave of retirements combined with a significant influx of new hires has created a knowledge cliff. Current staff training applies a one-size-fits-all approach — the same content regardless of role, experience level, or where a rep is in their development. The bargaining skills gap is where this is most visible and most consequential — and it costs members money, benefits, and protections.`,
  commitments: [
    `Develop a comprehensive, tiered staff development program for all International Servicing Representatives. — The program will be role-appropriate, skill-level appropriate, and built around genuine professional development rather than one-size-fits-all content.`,
    `Establish organizing training as a foundational requirement for all International Servicing Representatives regardless of role. The principles of organizing underpin everything we do on behalf of members.`,
    `Build advanced training tracks for staff who bargain: offensive bargaining strategy, establishing strong board charges, the skilled use of information requests, and research tools to support preparation and strategy.`,
    `Develop strike readiness training specifically designed for the International Servicing Representative role that is distinct from the local-facing training that already exists.`,
    `Establish training standards for local leader and bargaining committee development. Local leaders benefit most when their individual approach is grounded in best practices built on the collective experience of our staff.`,
  ],
  quote:
    `"Every member deserves a representative who shows up prepared. That doesn't happen by accident — it happens because someone invests in building the skills to do this job at the highest level."`,
},

{
  number: '04',
  title: 'Reimaging National Political Action and CAP',
  subtitle: 'Start Funding Candidates. Start Winning Issues.',
  challenge: `Walter Reuther told us there is a direct relationship between the ballot box and the bread box — and that what the union fights for and wins at the bargaining table can be taken away in the legislative halls. But in today's political landscape, that model is failing. We are spending VCAP dollars and deploying significant national staff resources to campaigns — and losing. We are driving a wedge between members who are more politically divided than ever. The answer isn't to abandon political action — it's to try something different. Reuther's words can work in both directions: what we win in the legislative halls can strengthen what we fight for at the bargaining table. We get there through unifying issue-based campaigns — not the electoral fortunes of candidates who may or may not deliver.`,
  commitments: [
    `Redirect the national UAW's CAP resources — International-level staff, VCAP dollars, and organizational infrastructure — away from candidate-centered campaigns and toward sustained, member-driven issue campaigns that unify our membership across political lines.`,
    `Make clear that this is a national-level strategic shift. Locals and regional CAP councils retain full autonomy over their own political activity and endorsements.`,
    `Establish healthcare as the flagship national issue campaign: fight rising costs, the trend towards HDHP plans, employer-controlled policy designs, and the erosion of coverage our members have bargained for and earned.`,
    `Publish a transparent national candidate scorecard on labor issues, giving members information to make their own informed political choices.`,
    `Reserve formal national candidate endorsements for exceptional circumstances where the stakes are unambiguous and candidates prove themselves not just through photo ops on strike lines or speeches at our conventions, but through the hard work of championing our issues in substantive ways and actively supporting our issue campaigns.`,
  ],
  quote:
    `"It's time to step away from divisive politics and focus on what unifies us — issue-based campaigns that make us stronger at the bargaining table."`,
},

{
  number: '05',
  title:
    'Healthcare: Bargaining, Standards, and the Issue Campaign',
  subtitle:
    'Healthcare is a Defining Issue. It’s Time We Treated Like One.',
  challenge: `Healthcare is among the most consequential and difficult fights at the bargaining table across every UAW worksite and every sector.

The fights look different by sector but the challenge is universal. In the Big 3, traditional employees have fought to maintain fully employer-paid coverage while second-tier employees, who never had retiree healthcare, are still fighting to gain it. Across virtually every other sector, employers are pushing lesser plans at higher costs, including the troubling trend toward “employer policy” agreements that allow employers to change or even terminate benefits unilaterally.

And underneath all of it is the healthcare cliff: members working longer than they want to because they cannot afford to leave before they are Medicare-eligible. People who have spent their entire lives working deserve better than this trap.`,
  commitments: [
    `Build a Healthcare Bargaining Standards Committee in coalition with partner unions, developing coordinated contract language, benefit floor standards, and shared best practices that raise the baseline across every table where labor has a seat.`,
    `Launch a UAW-led comprehensive healthcare reform issue campaign built on a broad coalition of unions, community organizations, and working people across the political spectrum.`,
    `Keep the policy solution of the issue campaign open and coalition-driven. UAW will set the table and drive the organizing, but the direction of reform will be shaped collectively by the partners who bring their members and communities to the fight.`,
    `Train bargainers in the standards and best practices adopted by the Healthcare Bargaining Standards Committee and how to resist and reverse employer policy language that surrenders our right to bargain.`,
  ],
  quote:
    `"Every member in this union — Big 3 or higher ed, active or retired — is living the healthcare fight. It's time we fought it together, at the table and in the streets."`,
},

{
  number: '06',
  title:
    'Internal Campaign Finance Reform & Union Election Integrity',
  subtitle:
    'Union Elections should be Won by Ideas, Not Money',
  challenge: `Incumbent board members hold structural advantages in internal UAW elections that cannot be fully eliminated. They tour worksites, make strategic announcements, speak at conferences, and engage with members continuously — all under the legitimate cover of doing union business. That access gap is real, and intellectual honesty requires acknowledging it.

But there is a second advantage that is not structural — it is corrupt. Board members leverage the administration they oversee to raise campaign funds through proxy asks that put staff in an impossible position: comply, or risk career consequences. This is compelled campaign labor and financial coercion. That is not a competitive election. That is a managed outcome.`,
  commitments: [
    `Prohibit anyone in UAW administration from soliciting staff to buy, sell, donate to, or otherwise support any internal campaign fundraising activity on behalf of any candidate. The proxy ask is explicitly a violation, not a loophole.`,
    `Impose a hard $5,000 spending cap on all internal UAW election campaigns with an individual member donation limit of $100 per candidate.`,
    `Impose a $5,000 cap on coordinated slate spending,with all coordinated expenditures counting against each participating candidate's individual $5,000 campaign cap`,
    `Utilize the pre-election issue of Solidarity Magazine as the standardized, equal-access platform for all candidates Every candidate gets the same space, format, and reach.`,
    `Create an Independent Election Oversight Board with explicit authority to investigate, enforce, and adjudicate all election rules compliance, to be implemented once the UAW is no longer under the oversight of the federally appointed monitor.`,
    `Uphold the UAW Constitution's member rights provisions in full: due process, equal access to union resources for all candidates, and enforceable protection from retaliation.`,
    `Work collaboratively with the board, the Independent Monitor, the UAW Staff Council, and within our constitutional framework to bring about necessary reforms — and lead by personal example in demonstrating the standard of conduct this union's elections deserve`,
  ],
  quote:
    `"Leadership that wins a fair fight gains the credibility to lead. That's the standard we're setting — for this election and every one after it."`,
},

{
  number: '07',
  title: 'Retiree Dignity and Continued Voice',
  subtitle:
    'You Built This Union. We Don’t Get to Forget That.',
  challenge: `UAW retirees won the contracts, the benefits, and the standards that active members rely on today. Then they found themselves sidelined — while COLA was stripped, healthcare premiums rose, and Medicare supplemental coverage eroded.

Retirement security is not one benefit and it does not look the same across our membership. Some are watching a fixed pension lose ground to inflation year after year. Some are rationing prescriptions. Some are surviving spouses navigating a system that was never designed with them in mind. Some never truly retired — they kept working because they couldn't afford not to.

We will not pit retirees against active workers or one generation against another. The retirees who won pensions and healthcare are not yesterday’s members. They proved what a strong union can do. We owe it to them to keep fighting.`,
  commitments: [
    `Establish a standing UAW Retiree Advisory Council with direct access to the President and to bargaining teams whose contracts affect retiree benefits.`,
    `Include retiree representatives in contract discussions that affect their benefits, with formal comment rights before any ratification vote.`,
    `Run a sustained issue campaign for entitlement protections — Social Security, Medicare, Medicaid — mobilizing both active and retired members together.`,
    `Create formal opportunities to integrate retired and active members in organizing, mobilization, and member education. Retirees are a resource, not a constituency to be managed.`,
    `Create a dedicated Retiree Liaison position within the UAW International, accountable directly to the President.`,
    `Champion an inclusive retiree definition at the 2026 Constitutional Convention, one that recognizes any member who has left the workforce after a defined period of service, regardless of age or benefit eligibility status.`,
    `Make retiree dues mandatory at $2 per month as a condition of retired membership, consistent with the principle that membership in this union requires contribution to it.`,
  ],
  quote:
    `"Retirees are not yesterday's members. Retirees are living proof of what this union can do when we decide to fight."`,
},

{
  number: '08',
  title: 'Organzing: Growing our Power',
  subtitle: 'Rallies Don’t Form Unions. Workers Do.',
  challenge: `Organizing is not optional. Union density has a direct and documented correlation to bargaining power. But organizing is also a moral obligation — anyone with the courage to stand up and demand change in their workplace deserves to be supported in that fight.

The UAW has lost winnable campaigns under the current administration — including Mercedes-Benz in Alabama (56% to 44%) — a failure of strategy and leadership at the top, not of the in-plant organizing committee or the organizers who put in the work on the ground. The VW win in Chattanooga was real, but it was built on years of commitment by workers and staff long before Fain arrived. Surfing the momentum of the Big 3 contracts is not an organizing strategy. It is hubris.

The loss at Axalta Coating Systems in Mount Clemens, Michigan — in the heart of union country — is the most instructive recent example. UAW leadership pointed to two rallies as evidence of effort. Rallies don't form unions. Workers do. Being surprised by the outcome means you didn't know your worksite.

The credibility problem compounds everything. Employer anti-union campaigns are citing the monitor reports. No organizing budget overcomes a credibility deficit. Leadership above reproach is a prerequisite for consistent organizing wins.`,
  commitments: [
    `Restore organizing to its proven fundamentals: consistent and accurate data collection, worksite mapping, network building, systematic relationship building, leader development, and comprehensive inoculation against the employer's campaign.`,
    `Recognize that organizing is not one-size-fits-all. Manufacturing, campus, hospital, and service sector campaigns require different strategies and different expertise.`,
    `End the outsourcing of organizing leadership. — The UAW's organizing department will be led by experienced UAW staff with institutional knowledge and accountability to outcomes.`,
    `Use technology as a tool, not a substitute. Digital authorization cards are a tool, not a strategy; adopt new tools constantly, but always in service of proven principles.`,
    `Measure success beyond the vote. A unit that votes yes without having been built through genuine organizing will struggle to bargain a first contract and fail to enforce it.`,
    `Restore leadership credibility as an organizing asset. Clean governance and organizing success are not separate priorities, they are the same priority.`,
  ],
  quote:
    `"Every worker who has the courage to stand up deserves a union that knows how to win — and how to make that win last."`,
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
