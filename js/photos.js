(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto("id-"+id, url);
lazyload();
})(`
<li class="item " id="id-20200609282-039" style="background-image: url('/qq/photos/tint/20200609282-039-65ba1d.webp')" title="20200609282-039">
  <img class="lazyload" data-src="/qq/photos/thumbnail/20200609282-039-ccf4df.webp" src="/qq/photos/tint/20200609282-039-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/20200609282-039-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/20200609282-039" data-target="id-20200609282-039">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0007-1456046255-0" data-target="id-0007-1456046255-0" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('20200609282-039','/qq/20200609282-039');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('20200609282-039', '/qq/20200609282-039')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0007-1456046255-0" style="background-image: url('/qq/photos/tint/0007-1456046255-0-65ba1d.webp')" title="0007-1456046255-0">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0007-1456046255-0-ccf4df.webp" src="/qq/photos/tint/0007-1456046255-0-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0007-1456046255-0-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0007-1456046255-0" data-target="id-0007-1456046255-0">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/20200609282-039" data-target="id-20200609282-039" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" data-target="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0007-1456046255-0','/qq/0007-1456046255-0');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0007-1456046255-0', '/qq/0007-1456046255-0')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" style="background-image: url('/qq/photos/tint/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-65ba1d.webp')" title="0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-ccf4df.webp" src="/qq/photos/tint/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" data-target="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0007-1456046255-0" data-target="id-0007-1456046255-0" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6" data-target="id-0005-宗教和科学" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81','/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81', '/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0005-宗教和科学" style="background-image: url('/qq/photos/tint/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-65ba1d.webp')" title="0005-宗教和科学">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-ccf4df.webp" src="/qq/photos/tint/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6" data-target="id-0005-宗教和科学">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" data-target="id-0006-quote-freedom-has-many-difficulties-and-democracy-is-not-perfect-but-we-have-never-had-to-john-f-kennedy-66-59-81" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" data-target="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0005-宗教和科学','/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0005-宗教和科学', '/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" style="background-image: url('/qq/photos/tint/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-65ba1d.webp')" title="0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here’s-One-3">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-ccf4df.webp" src="/qq/photos/tint/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here%E2%80%99s-One-3-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" data-target="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0005-%E5%AE%97%E6%95%99%E5%92%8C%E7%A7%91%E5%AD%A6" data-target="id-0005-宗教和科学" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0003-041" data-target="id-0003-041" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here’s-One-3','/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0004-Do-You-Have-A-Step-by-Step-Blog-Writing-Process-Here’s-One-3', '/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0003-041" style="background-image: url('/qq/photos/tint/0003-041-65ba1d.webp')" title="0003-041">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0003-041-ccf4df.webp" src="/qq/photos/tint/0003-041-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0003-041-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0003-041" data-target="id-0003-041">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" data-target="id-0004-do-you-have-a-step-by-step-blog-writing-process-here-s-one-3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0002-040" data-target="id-0002-040" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0003-041','/qq/0003-041');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0003-041', '/qq/0003-041')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0002-040" style="background-image: url('/qq/photos/tint/0002-040-65ba1d.webp')" title="0002-040">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0002-040-ccf4df.webp" src="/qq/photos/tint/0002-040-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0002-040-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0002-040" data-target="id-0002-040">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0003-041" data-target="id-0003-041" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/qq/0001-jon-ly-487338-unsplash-768x432" data-target="id-0001-jon-ly-487338-unsplash-768x432" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0002-040','/qq/0002-040');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0002-040', '/qq/0002-040')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
<li class="item " id="id-0001-jon-ly-487338-unsplash-768x432" style="background-image: url('/qq/photos/tint/0001-jon-ly-487338-unsplash-768x432-65ba1d.webp')" title="0001-jon-ly-487338-unsplash-768x432">
  <img class="lazyload" data-src="/qq/photos/thumbnail/0001-jon-ly-487338-unsplash-768x432-ccf4df.webp" src="/qq/photos/tint/0001-jon-ly-487338-unsplash-768x432-65ba1d.webp" height="" width="" />
  <span class="full">
    <span style="background-image: url('/qq/photos/large/0001-jon-ly-487338-unsplash-768x432-686656.webp')"></span>
  </span>
  <a class="open" href="/qq/0001-jon-ly-487338-unsplash-768x432" data-target="id-0001-jon-ly-487338-unsplash-768x432">Open</a>
  <a class="close" href="/qq/">Close</a>
  <a href="/qq/0002-040" data-target="id-0002-040" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <ul class="links top photodetail-links">
    <li class="share"><a onClick="shareImage('0001-jon-ly-487338-unsplash-768x432','/qq/0001-jon-ly-487338-unsplash-768x432');" title="Share this photo">Share</a></li>
  </ul>
  <ul class="meta">
    <!--
        <li></li>
        <li></li>
        <li><span class="aperture"><em>f</em>/</span></li>
        -->
    <li><a onClick="shareImage('0001-jon-ly-487338-unsplash-768x432', '/qq/0001-jon-ly-487338-unsplash-768x432')" class="gridview-button share" title="Share this image">Share</a></li>
  </ul>
</li>
`);