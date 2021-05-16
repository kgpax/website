import {
  Page,
  Segment,
  Paragraph,
  ExternalLink as EL,
  Code as C,
  Emoji as E,
} from '../components';

const SiteBuild002 = (props) => (
  <Page {...props}>
    <Segment heading="Lessons learned">
      <Paragraph>
        I was probably a little hasty in putting the site live. As soon as I had
        notified the{' '}
        <EL href="https://twitter.com/kevinpaxton82/status/1393278487939670023?ref_src=twsrc%5Etfw">
          Twittersphere
        </EL>{' '}
        about my new venture, I decided to actually check for the first time how
        it looked on my phone.
      </Paragraph>
      <Paragraph>
        It wasn't good <E alt="grimacing face emoji">😬</E>.
      </Paragraph>
      <Paragraph>
        There was zero padding around the content on mobile, making it
        particularly bad on any device with a{' '}
        <EL href="https://guide.servify.in/phone-notch-design-explained/">
          notch
        </EL>
        , and my attempt at vertically centering content on the homepage had
        backfired as the content itself was bigger than the viewport. For a
        front-end developer who claims to have an eye for design, this was all a
        bit of a misstep and a lesson learned about not getting carried away
        with the excitement of going live.
      </Paragraph>
      <Paragraph>
        The next facepalm moment came when I realised after the fact that
        Netlify doesn't appreciate my 2014-era SPA, and would <C>404</C> if you
        tried to access a page directly. Makes sense, since all pages are
        currently routes rather than files, so I discovered that I needed to
        include a{' '}
        <EL href="https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/#the-redirects-file">
          special <C>_redirects</C> file
        </EL>{' '}
        to force all requests to go to the <C>index.html</C> page, and allow
        routing to handle all of the requests.
      </Paragraph>
      <Paragraph>
        I'd also noticed some things in my content which in hindsight I wasn't
        happy about. I'd used the phrase "I toyed with..." three separate times,
        which made me wish I had proof-read it sooner and been a bit more varied
        with my language. However, that made me decide to set myself a rule for
        this website: that I will not go back and change any posts I have
        published, except to correct any glaring typos or broken links. The
        content can stay with all its warts, hairs and careless grammar, and we
        will see if my copywriting improves over time.
      </Paragraph>
      <Paragraph>
        ...and yes, for those of you just noticing, I am quite self-critical. I
        don't beat myself up too much, it's just my way of trying to continually
        improve.
      </Paragraph>
    </Segment>
    <Segment heading="Back to the site">
      <Paragraph>
        Now that I've got a couple of pages of content, I wanted to allow
        navigation between them. For now, given that my site has just one story
        with multiple parts, I've gone down the route of a simple prev/next
        links at the end of each article to allow the content to naturally flow.
        A link back to the homepage will be present at the top of each page and
        I'm not looking to make that more prominent just yet since the homepage
        doesn't serve up much other than directing you to reading the first
        post. It's all a bit rudimentary at the moment, but to be fair there
        isn't much yet to navigate to, so I'll let this one evolve as the site
        does.
      </Paragraph>
      <Paragraph>
        I also put a bit more effort into the HTML structure of the pages since
        the first release, including what I believe is the correct usage of
        semantic elements for the content of the page; <C>article</C>,{' '}
        <C>section</C>, etc. &mdash; I even managed to squeeze in what must be
        my first ever use of the <C>time</C> element for the date of each post.
      </Paragraph>
    </Segment>
    <Segment heading="Backgrounds and motion">
      <Paragraph>
        I hinted briefly in my last post that I like good design and I like
        subtle use of animations to bring a bit of life to a page. The more
        observant of you may have noticed that my pages change their background
        colour each time you reload them; I did that as a starting point just
        for a bit of fun, and I think I'm going to stick with it because I quite
        like it &mdash; I think it offers a bit of entropy to what is currently
        an otherwise bog-standard site.
      </Paragraph>
      <Paragraph>
        In the first release, the background was a two-tone split along a
        diagonal line, and whilst that didn't look too bad given the minimal
        effort that was put into it, my ambition was for something a bit more
        curved with subtle undulation. Maybe my PlayStation home screen has been
        subliminally influencing me all these years. I've happened across a
        number of articles and Twitter posts discussing how to animate SVGs, all
        the time wishing that <em>I</em> was somebody who got to do cool UI
        stuff like that &mdash; well, I figured that this might be a nice
        opportunity for me to <strong>(a)</strong> turn that frown upside down,
        and <strong>(b)</strong> see if it could work for my background.
      </Paragraph>
    </Segment>
    <Segment heading="Next steps">
      <Paragraph>
        Looking at what I actually implemented from my last todo list:
      </Paragraph>
      <ul>
        <li>
          <strong>Put some motion on the landing page.</strong>
          <br />I decided to put this one on hold for a bit. My ideas were
          around having the main heading and sub heading transition in when the
          page loads, and then having some parallax effect when scrolling to
          display the content below. I haven't quite figured out how I'd like
          that to look, and to be honest I don't think it suits the current
          content and layout very well. **(TODO - cross icon)
        </li>
        <li>
          <strong>Work on the page backgrounds.</strong>
          <br />
          words words words. <E alt="check">✓</E>
        </li>
        <li>
          <strong>Favicon and early browser and device testing.</strong>
          <br />
          Built my self a basic favicon and am now trying it out as a "logo" for
          my site. When I get a bit of time, I'd like to make it so that the
          lettering is a cut-out of the background, rather than a solid colour.
          <E alt="check">✓</E>
        </li>
        <li>
          <strong>Think about the navigation structure of the site.</strong>
          <br />
          The navigation is rudimentary at the moment, but to be fair there
          isn't much yet to navigate to. I'll let this one evolve as the site
          does. <E alt="check">✓</E>
        </li>
      </ul>
      <Paragraph>
        For the next update, I want to focus on the following:
      </Paragraph>
    </Segment>
  </Page>
);

export default SiteBuild002;
