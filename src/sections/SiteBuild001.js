import { Page, Segment, Paragraph, Code, ExternalLink } from '../components';

const SiteBuild001 = () => (
  <Page title="Building the site : part one">
    <Segment heading="Motivation">
      <Paragraph>
        I'd been toying with the idea of having my own website for a while. I'm
        pretty sure I made it a new years resolution for 2021, although when the
        lockdown kicked in and home-schooling (a.k.a parenting-from-work) became
        a thing, I'd lost any appetite I had for giving myself extra
        responsibility.
      </Paragraph>
      <Paragraph>
        I wasn't sure what I would put on a site... in fact at the time of
        writing this, I'm still not sure. I'm a bit of an oddball in that I'm
        self confident whilst also being quite shy and humble, and I find it
        hard to put myself or my ideas out there in such a public space. I'd
        been given suggestions about making a blog, or a portfolio site, or even
        just having a space to do some side projects and little fun hacks; all
        of which are good ideas.
      </Paragraph>
      <Paragraph>
        I figured that for my opening gambit, I could write about my experience
        of putting this site together, and share my thought processes and
        decisions along the way.
      </Paragraph>
      <Paragraph>
        Pro tip: I can ramble. If you're more a TL;DR person, this might not be
        your bag, but if you fancy embarking on my voyage of discovery, then
        strap in.
      </Paragraph>
    </Segment>

    <Segment heading="Picking the tech stack">
      <Paragraph>
        I'm a full stack developer by trade, or at least historically I am. My
        passion is for front-end development and my current go-to front-end
        library is{' '}
        <ExternalLink href="https://reactjs.org/">React</ExternalLink>. Despite
        my current job being in a front-end team, I haven't actually gotten the
        opportunity to do a great deal of front-end work and keep up with modern
        front-end trends as much as I'd like. I toyed with the idea of using
        this website as an opportunity to skill up on{' '}
        <ExternalLink href="https://nextjs.org/">NextJS</ExternalLink> for
        universal rendering, or even go down the static site generator route
        with{' '}
        <ExternalLink href="https://www.gatsbyjs.com/">Gatsby</ExternalLink>, or{' '}
        <ExternalLink href="https://www.11ty.dev/">Eleventy</ExternalLink>, or
        perhaps one of the many others options which I'm not really caught up
        with because I've been criminally out of touch with front-end tech
        stacks.
      </Paragraph>
      <Paragraph>
        In the end, I've opted to reduce the number of learning curves and just
        go the way of using <Code>create-react-app</Code>. It's a comfort zone
        and one which allows me to focus on the early build out of the site
        without getting bamboozled and ultimately disincentivised right at the
        start. Heck, check out the{' '}
        <ExternalLink href="https://github.com/kgpax/website/tree/sitebuild-001">
          source code at the time of this version
        </ExternalLink>{' '}
        and you'll see that I'm currently building these pages using components
        rather than using markdown which builds to HTML. I think that's
        old-school now, right?
      </Paragraph>
      <Paragraph>
        I'd toyed with the idea of using{' '}
        <ExternalLink href="https://svelte.dev/">Svelte</ExternalLink> instead
        of React because I like the idea of compiling away the framework and
        having plain-ol` javascript without all of the extra weight; however, my
        ultimate aim would be to not be so dependant on javascript at all and
        instead look to have the content as static as possible for better
        performance and SEO; all things which I have not had much in the way of
        personal experience in. As such, I'll probably go down the route of
        static site generators and migrate all of this code over as part of a
        learning process.
      </Paragraph>
    </Segment>

    <Segment heading="The design">
      <Paragraph>
        I'm quite a visually driven person. I like to think I have a good eye
        for design, but that doesn't necessarily translate to being{' '}
        <em>good at</em> design.
      </Paragraph>
      <Paragraph>
        I've opted to start fairly minimalist, whilst putting at least some
        thought into colour, typography and spacing. I plan to scour the web for
        inspiration on how I can enhance the aesthetics of this website, and use
        it as an opportunity to flex some of those UI and UX muscles which have
        been wasting away for too long.
      </Paragraph>
    </Segment>

    <Segment heading="My first go-live">
      <Paragraph>
        I purchased the <Code>kevinpaxton.com</Code> domain years ago, around
        the time that Google launched its <Code>.dev</Code> top level domains. I
        didn't have a concrete plan at the time, I just wanted to see if the
        domain was available for my name and get it whilst I could.
      </Paragraph>
      <Paragraph>
        Since then, it has just sat there, squatting; I've renewed it twice
        since then and only remembered I had it when I got the renewal emails.
        In fact, it's been so long out of my mind that when I deployed the first
        version of this site,{' '}
        <ExternalLink href="https://github.com/kgpax/website/commit/f855e83657d20770641fb00cea30c795e8693eb8">
          I got the domain wrong
        </ExternalLink>
        , thinking I'd purchased <Code>kevinpaxton.dev</Code> instead of
        securing the <Code>.com</Code> domain.
      </Paragraph>
      <Paragraph>
        I was recommended using{' '}
        <ExternalLink href="https://app.netlify.com/">Netlify</ExternalLink> as
        a quick and easy way to host my site by a{' '}
        <ExternalLink href="https://twitter.com/CarolSaysThings">
          friend of mine
        </ExternalLink>{' '}
        and sure enough the process was really streamlined and really quite
        cool. I loved how once it got your permission to go to town on your
        repo, it just set everything up for you. I'm familiar with pipelines and
        whatnot integrating with GitHub, but I was still pleasantly surprised at
        how hands-off the process was and how when it was completed, it Just
        Works&trade;. I had to do some Google-Fu to get my Google domain
        pointing to my Netlify app, but that's mainly because I didn't RTFM and
        tried to go it alone with my painfully limited DNS knowledge, but in the
        end - here we are.
      </Paragraph>
      <Paragraph>
        The start has been made. Now I've got to keep it up.
      </Paragraph>
    </Segment>

    <Segment heading="Next steps">
      <Paragraph>
        I'm going to try an make this a regular section to my updates, where I
        list bits I want to go after next. I won't hold myself to getting
        everything done, but it will serve as an interesting retrospective for
        my journey.
      </Paragraph>
      <Paragraph>
        Here's what I hope to put up next time:
        <ul>
          <li>
            Put some motion on the landing page - I love a bit of subtle
            animation, me
          </li>
          <li>
            Work on the page backgrounds - change those straight lines to
            curves?
          </li>
          <li>Favicon and early browser and device testing</li>
          <li>Think about the navigation structure of the site</li>
        </ul>
        Stretch goals:
        <ul>
          <li>
            Get some illustrations and imagery in place - this is far too text
            heavy, I want to fix that
          </li>
        </ul>
      </Paragraph>
    </Segment>
  </Page>
);

export default SiteBuild001;
