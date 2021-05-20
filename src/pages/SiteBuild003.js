import {
  Page,
  Segment,
  Paragraph,
  CodeBlock,
  ImageBlock,
  ExternalLink as EL,
  Code as C,
  Emoji as E,
} from '../components';

const SiteBuild002 = (props) => (
  <Page {...props}>
    <Segment heading="Background and motion">
      <Paragraph>
        I finally got around the making the page background look like I was
        thinking, replacing that sharp diagonal line with some oscillating waves
        at the half-way point of the page. I did wonder whether I should fix the
        background position independent of scroll position so that the wave is
        always visible at the midpoint of the viewport, but I decided against it
        as I think it serves as a subliminal indication of progress down the
        page. Plus it's something to look forward to as you scroll down.{' '}
        <E alt="smiling emoji">😄</E>
      </Paragraph>
      <Paragraph>
        It wasn't actually anywhere near as complicated to create as I was
        expecting. Of course, I couldn't have done it without my old pal Google,
        but it turns out I'm not actually all that original and that the idea of{' '}
        <EL href="https://www.google.com/search?q=animated+wave+svg">
          animated wave SVGs
        </EL>{' '}
        is pretty popular and therefore pretty easy to learn how to implement
        without having to remaster trigonometric ratios and the dark mystic arts
        of the SVG <C>path</C> element.
      </Paragraph>
      <Paragraph>
        First, I just wanted a static curved svg to see how easily I could fudge
        it into the background. For this, I found the beautifully relevant{' '}
        <EL href="https://getwaves.io/">getwaves.io</EL>, which let me generate
        random wave patterns and copy the SVG <C>path</C> element which drew
        them.
      </Paragraph>
      <ImageBlock
        src="site-build-003/getwavesio.png"
        alt="Screenshot of the getwaves.io website"
        caption="literally making waves with getwaves.io"
      />
      <Paragraph>
        For reference, this is what the SVG code for a wave can look like:
      </Paragraph>
      <CodeBlock
        showLineNumbers={false}
        code={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1"
        d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,213.3C672,235,768,213,864,192C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
`}
      />
      <Paragraph>
        Good luck understanding what's going on in that{' '}
        <C>&lt;path d="..." /&gt;</C> attribute. I have a basic working
        knowledge of SVG drawing syntax, but there is no way I was making one of
        those on my own! Once I had generated one that I liked, I was able to
        save the <C>.svg</C> file and use that as the <C>background-image</C> to
        my site.
      </Paragraph>
      <Paragraph>
        Of course, that looked pants since the wave was only around <C>320px</C>{' '}
        tall and so it just plonked itself there at the top of my background and
        left the remainder of the page blank. What I wanted was the wave to form
        the transition from one background colour to another at the halfway
        point of the page. I could use CSS properties such as{' '}
        <C>background-position</C> and <C>background-size</C> to fine tune the
        placement, whilst the two-tone background could be achieved on a
        different element underneath the SVG background using a linear gradient
        with a sharp 50% horizontal split. However, the next problem was much
        more significant...
      </Paragraph>
      <Paragraph>
        The SVG which I copied from{' '}
        <EL href="https://getwaves.io/">getwaves.io</EL> was a fixed colour, and
        I needed it to match the second colour of my two-tone background to
        blend the transition. Changing SVG colours in CSS is pretty easy using
        the CSS <C>stroke</C> and <C>fill</C> properties, except you cannot
        expect it to work when the SVG is used as an image, either in an{' '}
        <C>&lt;img&gt;</C> element or as a CSS <C>background-image</C> &mdash;
        it just doesn't seem to be possible address the SVG via CSS that way.
        The only way to allow CSS to influence an SVG in my experience is to use
        an HTML <C>&lt;svg&gt;</C> element in-line, instead of an <C>.svg</C>{' '}
        file as an image. I replicated the SVG code as a React component and
        used CSS to set the fill colour dynamically based on the random
        background colours being used.
      </Paragraph>
      <Paragraph>
        The problem now was that the wave SVG was an{' '}
        <EL href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements">
          inline-level element
        </EL>
        , and would become a part of the page layout rather than being a part of
        the background. I had a solution to that, but it felt (and still feels)
        a bit hacky: I created a new <C>&lt;Background&gt;</C> React component
        which would have two immediate children: <strong>(1)</strong> the SVG
        and <strong>(2)</strong> the actual content, and use CSS to layer them
        on top of another in the right places and put the two-tone solid
        background under the lot; something like this:
      </Paragraph>
      <CodeBlock
        showLineNumbers={false}
        code={`const Container = styled.div\`
  position: relative;
  background: linear-gradient(...);
\`;
const Svg = styled.svg\`
  position: absolute;
  display: block;
  top: calc(50% - 160px); /* 160px = 1/2 SVG height */
  left: 0;
  z-index: 1;
\`;
const Children = styled.div\`
  position: relative;
  z-index: 2;
\`
const Background = () => (
    <Container>
      <Svg />
      <Children>{children}</Children>
    </Container>
);`}
      />
      <Paragraph>
        This worked great, although the CSS needed some tweaking from the above
        simplification in order to look correct on various screen widths.
      </Paragraph>
      <Paragraph>
        Now that I had the curved line I wanted, the next challenge was to
        animate it in a way that made it look like a wave, slowly undulating up
        and down. I expected this to be a monster of a task, requiring me to
        look at the SVG paths of a number of waves to try to decipher and
        comprehend the immense gibberish which is the SVG <C>path</C>{' '}
        instructions in order to know what parts would change to achieve the
        desired effect. Once again, though,{' '}
        <EL href="https://getwaves.io/">getwaves.io</EL> came to the rescue
        &mdash; indirectly this time.
      </Paragraph>
      <Paragraph>
        When you click the "dice" button on this site to generate a new wave,
        the wave preview transitions from one wave to another. This tipped me
        off to the idea that browsers can perform the transition from one SVG
        path to another in the same way that they can transition, say, CSS
        position and colour. I did a quick Google to see how that was done and{' '}
        <EL href="https://css-tricks.com/animate-svg-path-changes-in-css/">
          I was incredibly surprised at the answer
        </EL>
        . It was ridiculously simple, and completely unexpected.
      </Paragraph>
      <Paragraph>
        It turns out, SVG paths can be described in CSS as well as in HTML. I
        still can't quite believe that this is correct, because on face value it
        doesn't make much sense, but in essence:
      </Paragraph>
      <CodeBlock
        showLineNumbers={false}
        code={`<svg viewBox="0 0 10 10">
  <path d="M2,2 L8,8" />
</svg>`}
      />
      <Paragraph>...can also be achieved with:</Paragraph>
      <CodeBlock
        showLineNumbers={false}
        code={`<style>
  .drawMeWithCss {
    d: path('M2,2 L8,8');
  }
</style>
<svg viewBox="0 0 10 10">
  <path class="drawMeWithCss" />
</svg>`}
      />
      <Paragraph>
        Even though I was convinced this was a{' '}
        <EL href="https://theagileadmin.com/2013/09/16/is-it-a-bug-or-a-feature-who-cares/">
          bug-come-feature
        </EL>
        , I wasn't going to complain because it meant that I now had an
        achievable way to animate an SVG path using native CSS animation:
      </Paragraph>
      <CodeBlock
        showLineNumbers={false}
        language="css"
        code={`@keyframes wave {
  0%   { d: path('<start path>'); }
  100% { d: path('<end path>'); }
}
.drawMeWithCss {
  animation: wave 10s infinite alternate;
}`}
      />
      <Paragraph>
        It worked! I was pretty shocked at how straightforward that was, and
        definitely pleased with the result. Now that I had that working, I
        generated a bunch of new wave SVG paths and used those to give more
        animation keyframes to the wave, and to make it animate in a continuous
        forward direction, starting and ending on the same wave rather than
        bouncing back and forth since that looked less natural.
      </Paragraph>
      <Paragraph>
        The next thing I thought I could try was to add more <C>&lt;path&gt;</C>{' '}
        elements to the existing SVG and set slightly different opacities to
        each one, giving the visual appearance of waves overlaying each other.
        By doing this and animating them all with slightly different timings,
        paths and keyframe offsets, I was able to achieve what I think looks
        like a nice natural "wave" aesthetic to transition the page background
        colours.
      </Paragraph>
      <Paragraph>
        The finishing touch for this was to acknowledge that not everybody wants
        motion in their site, and so using the relatively modern CSS media
        feature <C>@media (prefers-reduced-motion)</C> I could set the animation
        states to be paused, thereby leaving a static wave for those with that
        preference.
      </Paragraph>
    </Segment>
    <Segment heading="Proper 404s">
      <Paragraph>
        I mentioned in my last update that I had found a way to prevent unwanted{' '}
        <C>404</C> errors from occurring when deep-linking to a route on the
        site, and that the solution to that actually meant that nothing was ever
        a <C>404</C>.
      </Paragraph>
      <Paragraph>
        My two thoughts at the time on how to fix that were <strong>(a)</strong>{' '}
        generate a dynamic <C>_redirects</C> file based on the actual pages of
        the site, and <strong>(b)</strong> kick the{' '}
        <EL href="https://reactjs.org/docs/create-a-new-react-app.html">CRA</EL>{' '}
        <EL href="https://en.wikipedia.org/wiki/Single-page_application#:~:text=A%20single%2Dpage%20application%20(SPA,browser%20loading%20entire%20new%20pages">
          SPA
        </EL>{' '}
        into touch and migrate to a static site generator. I opted for approach{' '}
        <strong>(a)</strong> as a short term solution because I want to look at
        the migration once I have built up enough of the site to have complex
        and interactive pages to migrate, to learn how those would be done.
      </Paragraph>
      <Paragraph>
        Creating the <C>_redirects</C> file dynamically wasn't too complicated.
        I already had a code-based representation of my site map as a file which
        I used to help with the navigational components of the site. All I
        needed to do was to write a script to create a new <C>_redirects</C>{' '}
        file which included all of the site pages as instructions to redirect to{' '}
        <C>index.html 200</C>, with a catch-all at the bottom to <C>404</C>{' '}
        everything else. The final output would look something like this:
      </Paragraph>
      <CodeBlock
        showLineNumbers={false}
        language="text"
        code={`/ /index.html 200
/site-build-001 /index.html 200
/site-build-002 /index.html 200
/site-build-003 /index.html 200
/* /index.html 404`}
      />
      <Paragraph>
        The reason that the <C>404</C> rule also redirects to the{' '}
        <C>/index.html</C> file is so that the routing for my <C>404</C> page
        can be handled by the router for the site.
      </Paragraph>
      <Paragraph>
        All I needed to do now was to ensure that this file was generated every
        time that the site was deployed, which could be achieved by making it a
        part of the build process &mdash; to happen after the build had
        completed &mdash; and to place the file into the <C>build</C> folder to
        be published. Doing this is an <C>npm</C> based project is easy - I just
        added a <C>postbuild</C> script to <C>package.json</C> which ran the
        script to generate the file.
      </Paragraph>
    </Segment>
  </Page>
);

export default SiteBuild002;
