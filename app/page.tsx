"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaTripadvisor,
} from "react-icons/fa";
import {
  SiAirbnb,
  SiExpedia,
  SiFoursquare,
  SiReddit,
  SiTrustpilot,
  SiX,
  SiYoutube,
  SiYelp,
  SiZomato,
} from "react-icons/si";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=918368573451&text=Hello%2C%20I%27m%20interested%20in%20Critiquee.";
const PLATFORM_LOGIN = "https://vendors.critiquee.com/login";

const supportedPlatforms = [
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "#E4405F",
    type: "Reels · Stories · Carousels",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "#1877F2",
    type: "Content · Community · Ads",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    type: "B2B · Thought Leadership",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    color: "#FF0000",
    type: "Shorts · Video · Growth",
  },
  {
    name: "X",
    icon: SiX,
    color: "#FFFFFF",
    type: "Conversations · Trends",
  },
  {
    name: "Reddit",
    icon: SiReddit,
    color: "#FF4500",
    type: "Communities · Discovery",
  },
];

const services = [
  [
    "Social Media Strategy",
    "Platform-specific strategies built around your audience, brand goals and the content that can actually move them.",
    "#155A9C",
  ],
  [
    "Content Creation",
    "Scroll-stopping reels, carousels, stories, posts and copy designed to make your brand worth noticing.",
    "#F23F49",
  ],
  [
    "Community Management",
    "Build stronger relationships through meaningful conversations, timely responses and an active brand community.",
    "#14B887",
  ],
  [
    "Paid Social Campaigns",
    "Performance-focused campaigns designed to reach the right audience and turn attention into measurable action.",
    "#8B5CF6",
  ],
  [
    "Influencer Marketing",
    "Connect your brand with relevant creators and build collaborations that feel authentic to their audiences.",
    "#F59E0B",
  ],
  [
    "Social Media Analytics",
    "Track reach, engagement, audience behaviour and campaign performance to understand what is actually driving growth.",
    "#2F7CF6",
  ],
];

const features = [
  [
    "Platform-First Strategy",
    "Every platform behaves differently. We shape content, formats and campaigns around where your audience actually spends attention.",
  ],
  [
    "Content That Feels Native",
    "Reels, carousels, stories, posts and copy created to feel natural to the feed—not like another generic advertisement.",
  ],
  [
    "Consistent Brand Presence",
    "A clear visual language, tone of voice and publishing rhythm keeps your brand recognisable across every social touchpoint.",
  ],
  [
    "Data-Led Decisions",
    "We track what earns attention, engagement and action, then use those insights to continuously sharpen your social strategy.",
  ],
];

const testimonials = [
  {
    quote:
      "BigWig gave our social presence a clear direction. The content finally feels like our brand and the audience response has been noticeably stronger.",
    name: "Client Name",
    role: "Marketing Head · Brand Name",
    score: "+42%",
    metric: "Engagement",
    color: "#155A9C",
  },
  {
    quote:
      "They brought strategy, creativity and consistency together. We stopped posting just to stay active and started creating content with a real purpose.",
    name: "Client Name",
    role: "Founder · Brand Name",
    score: "3.1×",
    metric: "Social Reach",
    color: "#F23F49",
  },
  {
    quote:
      "From campaign ideas to daily execution, the team understands how to turn social attention into conversations that actually matter to the business.",
    name: "Client Name",
    role: "Growth Lead · Brand Name",
    score: "+68%",
    metric: "Interactions",
    color: "#34E0A1",
  },
];

const rotatingLines = [
  "Strategy that turns attention into growth",
  "Content designed to stop the scroll",
  "Campaigns built for reach, engagement & conversion",
  "Build communities that remember your brand",
  "From creative ideas to measurable results",
];

const networkPlatforms = [
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "#E4405F",
    position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "#1877F2",
    position: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    color: "#FF0000",
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    position: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "X",
    icon: SiX,
    color: "#ffffff",
    position: "left-[17%] top-[17%] -translate-x-1/2 -translate-y-1/2",
  },
];

const socialCapabilities = [
  [
    "Content Planning",
    "Structured content calendars built around campaigns, trends, audience interests and important brand moments.",
  ],
  [
    "Creative Direction",
    "A consistent visual language for posts, reels, stories and campaigns that makes your brand instantly recognisable.",
  ],
  [
    "Copy & Storytelling",
    "Captions, hooks and narratives written to earn attention, communicate clearly and encourage action.",
  ],
  [
    "Reels & Short-Form Video",
    "Platform-native short-form concepts designed around strong hooks, retention and shareability.",
  ],
  [
    "Trend & Culture Tracking",
    "We identify relevant conversations, formats and cultural moments your brand can participate in naturally.",
  ],
  [
    "Audience Insights",
    "Behaviour, engagement and content signals help us understand what your audience actually responds to.",
  ],
  [
    "Campaign Execution",
    "From launch planning to daily publishing, we coordinate campaigns across content, community and media.",
  ],
  [
    "Performance Optimisation",
    "Continuous analysis helps us improve creative, messaging, formats and distribution based on real results.",
  ],
];

const stats = [
  ["360°", "Social Strategy"],
  ["6+", "Core Platforms"],
  ["2X", "Organic + Paid"],
  ["100%", "Performance Focused"],
];

const faqs = [
  [
    "Which social media platforms do you manage?",
    "We manage major platforms including Instagram, Facebook, LinkedIn, YouTube, X and other relevant channels based on your brand, audience and business goals.",
  ],
  [
    "Do you create the content as well?",
    "Yes. Our social media services cover strategy, content planning, copywriting, creatives, reels, stories, carousels and platform-specific content execution.",
  ],
  [
    "Do you handle paid social media advertising?",
    "Yes. We plan, launch and optimise paid campaigns across platforms such as Meta and LinkedIn, including audience targeting, retargeting, creative testing and conversion campaigns.",
  ],
  [
    "How do you measure social media performance?",
    "We track the metrics that matter to your goals, including reach, engagement, audience growth, clicks, leads, conversions and campaign performance.",
  ],
  [
    "How often will you post on our social media?",
    "Posting frequency depends on your strategy, platforms and package. We build a content calendar around consistency and quality rather than posting without a clear purpose.",
  ],
  [
    "Can you work with our existing brand guidelines?",
    "Absolutely. We can work within your existing visual identity and tone of voice, or help establish a stronger social media direction if your brand needs one.",
  ],
];

function useCinematicMotion() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 72, opacity: 0, rotateX: -12, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 86%" },
          },
        );
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero-scene",
            start: "top top",
            end: "+=145%",
            scrub: 1,
            pin: true,
          },
        })
        .to(
          ".hero-copy",
          { y: -130, opacity: 0, scale: 0.76, filter: "blur(14px)" },
          0,
        )
        .to(".hero-network", { scale: 1.22, y: 105, opacity: 0.35 }, 0)
        .to(".hero-orbit", { rotate: 120, scale: 1.28 }, 0)
        .to(".hero-next", { y: 0, opacity: 1 }, 0.38);

      gsap.fromTo(
        ".story-letter",
        { opacity: 0, y: 70, rotateX: -85 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.016,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".story-scene",
            start: "top 55%",
            end: "bottom 58%",
            scrub: 1,
          },
        },
      );

      media.add("(min-width: 280px)", () => {
        const section = document.querySelector<HTMLElement>(".platforms-scene");
        const track = document.querySelector<HTMLElement>(
          ".platform-screen-track",
        );
        const viewport = document.querySelector<HTMLElement>(
          ".platform-screen-viewport",
        );

        if (!section || !track || !viewport) return;

        const getScrollDistance = () => {
          return Math.max(0, track.scrollHeight - viewport.offsetHeight);
        };

        const animation = gsap.to(track, {
          y: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,

            // Leave some visible space above/below the section
            start: "top 6%",

            // Enough physical page scroll to move all platform cards
            end: () => `+=${getScrollDistance() * 1.35}`,

            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Important because the content height is measured dynamically
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        return () => {
          animation.scrollTrigger?.kill();
          animation.kill();
        };
      });

      media.add("(min-width: 280px)", () => {
        const track = document.querySelector<HTMLElement>(".services-track");
        const section = document.querySelector<HTMLElement>(".services-scene");

        if (!track || !section) return;

        const getScrollAmount = () => {
          return -(track.scrollWidth - window.innerWidth);
        };

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });
      gsap.to(".globe-line", {
        strokeDashoffset: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".results-scene",
          start: "top 66%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      // ============================================================
      // PROCESS PIPELINE
      // ============================================================

      media.add("(min-width: 1024px)", () => {
        const section =
          document.querySelector<HTMLElement>(".process-pipeline");

        if (!section) return;

        const steps = gsap.utils.toArray<HTMLElement>(".process-flow-step");
        const nodes = gsap.utils.toArray<HTMLElement>(".process-flow-node");
        const rings = gsap.utils.toArray<HTMLElement>(".process-node-ring");
        const descriptions = gsap.utils.toArray<HTMLElement>(
          ".process-step-description",
        );

        const tagGroups = steps.map((step) =>
          gsap.utils.toArray<HTMLElement>(".process-tag", step),
        );

        const inputs = gsap.utils.toArray<HTMLElement>(".process-input");
        const outputs = gsap.utils.toArray<HTMLElement>(".process-output");

        // Initial states
        gsap.set(steps, {
          opacity: 0.3,
        });

        gsap.set(descriptions, {
          opacity: 0.3,
        });

        gsap.set(nodes, {
          scale: 0.85,
        });

        gsap.set(".process-signal", {
          opacity: 0,
        });

        const statusText = document.querySelector<HTMLElement>(
          ".process-status-text",
        );

        const statusDot = document.querySelector<HTMLElement>(
          ".process-status-dot",
        );

        const percentage = document.querySelector<HTMLElement>(
          ".process-percentage",
        );

        const updateStatus = (
          text: string,
          color: string,
          progress: string,
        ) => {
          if (statusText) statusText.textContent = text;

          if (percentage) percentage.textContent = progress;

          if (statusDot) {
            gsap.to(statusDot, {
              backgroundColor: color,
              boxShadow: `0 0 12px ${color}`,
              duration: 0.3,
            });
          }
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const progress = Math.round(self.progress * 100);

              if (percentage) {
                percentage.textContent = `${progress
                  .toString()
                  .padStart(2, "0")}%`;
              }
            },
          },
        });

        // ------------------------------------------------------------
        // START
        // ------------------------------------------------------------

        tl.to(
          ".process-signal",
          {
            opacity: 1,
            duration: 0.08,
          },
          0,
        );

        // ============================================================
        // 01 DISCOVER
        // ============================================================

        tl.to(
          steps[0],
          {
            opacity: 1,
            duration: 0.12,
          },
          0,
        )
          .to(
            nodes[0],
            {
              scale: 1.18,
              duration: 0.12,
            },
            0,
          )
          .to(
            rings[0],
            {
              scale: 1.45,
              opacity: 0.45,
              duration: 0.12,
            },
            0,
          )
          .to(
            descriptions[0],
            {
              opacity: 1,
              duration: 0.1,
            },
            0,
          )
          .to(
            tagGroups[0],
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.1,
            },
            0.03,
          )
          .to(
            inputs,
            {
              opacity: 1,
              y: 15,
              stagger: 0.025,
              duration: 0.12,
            },
            0.04,
          );

        tl.call(
          () => {
            updateStatus("01 — Understanding your brand", "#2F7CF6", "20%");
          },
          [],
          0.05,
        );

        // ============================================================
        // MOVE → STRATEGY
        // ============================================================

        tl.to(
          ".process-flow-line",
          {
            scaleX: 0.34,
            duration: 0.25,
            ease: "none",
          },
          0.15,
        );

        tl.to(
          ".process-signal",
          {
            left: "37.5%",
            duration: 0.25,
            ease: "none",
          },
          0.15,
        );

        tl.to(
          inputs,
          {
            x: 120,
            y: 70,
            scale: 0.4,
            opacity: 0,
            stagger: 0.02,
            duration: 0.18,
          },
          0.18,
        );

        // ============================================================
        // 02 STRATEGISE
        // ============================================================

        tl.to(
          steps[0],
          {
            opacity: 0.5,
            duration: 0.1,
          },
          0.38,
        )
          .to(
            nodes[0],
            {
              scale: 1,
              duration: 0.1,
            },
            0.38,
          )
          .to(
            rings[0],
            {
              opacity: 0,
              scale: 1,
              duration: 0.1,
            },
            0.38,
          )

          .to(
            steps[1],
            {
              opacity: 1,
              duration: 0.12,
            },
            0.38,
          )
          .to(
            nodes[1],
            {
              scale: 1.18,
              duration: 0.12,
            },
            0.38,
          )
          .to(
            rings[1],
            {
              scale: 1.45,
              opacity: 0.45,
              duration: 0.12,
            },
            0.38,
          )
          .to(
            descriptions[1],
            {
              opacity: 1,
              duration: 0.1,
            },
            0.38,
          )
          .to(
            tagGroups[1],
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.1,
            },
            0.4,
          );

        tl.call(
          () => {
            updateStatus("02 — Building the strategy", "#8B5CF6", "45%");
          },
          [],
          0.4,
        );

        // ============================================================
        // MOVE → CREATE
        // ============================================================

        tl.to(
          ".process-flow-line",
          {
            scaleX: 0.67,
            duration: 0.25,
            ease: "none",
          },
          0.45,
        );

        tl.to(
          ".process-signal",
          {
            left: "62.5%",
            duration: 0.25,
            ease: "none",
          },
          0.45,
        );

        // ============================================================
        // 03 CREATE
        // ============================================================

        tl.to(
          steps[1],
          {
            opacity: 0.5,
            duration: 0.1,
          },
          0.62,
        )
          .to(
            nodes[1],
            {
              scale: 1,
              duration: 0.1,
            },
            0.62,
          )
          .to(
            rings[1],
            {
              opacity: 0,
              scale: 1,
              duration: 0.1,
            },
            0.62,
          )

          .to(
            steps[2],
            {
              opacity: 1,
              duration: 0.12,
            },
            0.62,
          )
          .to(
            nodes[2],
            {
              scale: 1.18,
              duration: 0.12,
            },
            0.62,
          )
          .to(
            rings[2],
            {
              scale: 1.45,
              opacity: 0.45,
              duration: 0.12,
            },
            0.62,
          )
          .to(
            descriptions[2],
            {
              opacity: 1,
              duration: 0.1,
            },
            0.62,
          )
          .to(
            tagGroups[2],
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.1,
            },
            0.64,
          );

        // Creative pieces explode outward
        tl.fromTo(
          outputs,
          {
            opacity: 0,
            scale: 0.4,
            x: 0,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            x: (index) => (index - 1) * 25,
            y: (index) => (index === 1 ? -10 : 20),
            stagger: 0.025,
            duration: 0.14,
          },
          0.65,
        );

        tl.call(
          () => {
            updateStatus(
              "03 — Turning strategy into creative",
              "#F23F49",
              "70%",
            );
          },
          [],
          0.65,
        );

        // ============================================================
        // MOVE → OPTIMISE
        // ============================================================

        tl.to(
          ".process-flow-line",
          {
            scaleX: 1,
            duration: 0.25,
            ease: "none",
          },
          0.7,
        );

        tl.to(
          ".process-signal",
          {
            left: "87.5%",
            duration: 0.25,
            ease: "none",
          },
          0.7,
        );

        tl.to(
          outputs,
          {
            x: 130,
            y: 65,
            scale: 0.4,
            opacity: 0,
            stagger: 0.02,
            duration: 0.18,
          },
          0.72,
        );

        // ============================================================
        // 04 OPTIMISE
        // ============================================================

        tl.to(
          steps[2],
          {
            opacity: 0.5,
            duration: 0.1,
          },
          0.82,
        )
          .to(
            nodes[2],
            {
              scale: 1,
              duration: 0.1,
            },
            0.82,
          )
          .to(
            rings[2],
            {
              opacity: 0,
              scale: 1,
              duration: 0.1,
            },
            0.82,
          )

          .to(
            steps[3],
            {
              opacity: 1,
              duration: 0.12,
            },
            0.82,
          )
          .to(
            nodes[3],
            {
              scale: 1.18,
              duration: 0.12,
            },
            0.82,
          )
          .to(
            rings[3],
            {
              scale: 1.5,
              opacity: 0.5,
              duration: 0.12,
            },
            0.82,
          )
          .to(
            descriptions[3],
            {
              opacity: 1,
              duration: 0.1,
            },
            0.82,
          )
          .to(
            tagGroups[3],
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.1,
            },
            0.84,
          );

        tl.call(
          () => {
            updateStatus(
              "04 — Learning, improving & scaling",
              "#34E0A1",
              "100%",
            );
          },
          [],
          0.85,
        );

        // ============================================================
        // FINAL STATE
        // ============================================================

        tl.to(
          steps,
          {
            opacity: 1,
            duration: 0.12,
          },
          0.92,
        )
          .to(
            nodes,
            {
              scale: 1,
              duration: 0.12,
            },
            0.92,
          )
          .to(
            ".process-signal",
            {
              scale: 1.6,
              opacity: 0,
              duration: 0.12,
            },
            0.94,
          );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      media.add("(min-width: 1024px)", () => {
        const timeline = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".growth-scene",
              start: "top top",
              end: "+=145%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(
            ".growth-vendor",
            {
              xPercent: -16,
              yPercent: -7,
              rotate: -5,
            },
            0,
          )
          .to(
            ".growth-blog",
            {
              xPercent: 16,
              yPercent: 7,
              rotate: 5,
            },
            0,
          )
          .to(
            ".growth-core",
            {
              scale: 1.08,
              opacity: 0.45,
            },
            0,
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".signal-scene",
            start: "top top",
            end: "+=175%",
            scrub: 1,
            pin: true,
          },
        })
        .fromTo(
          ".signal-heading",
          { y: 90, opacity: 0, filter: "blur(12px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", ease: "power3.out" },
          0,
        )
        .to(".signal-copy", { xPercent: -115, opacity: 0 }, 0.32)
        .to(".signal-dashboard", { scale: 1.04, rotateY: -8, rotateX: 5 }, 0.18)
        .to(".signal-wave", { strokeDashoffset: 0 }, 0.3)
        .to(".signal-score", { scale: 1.35, opacity: 1 }, 0.48)
        .to(".signal-chip", { y: 0, opacity: 1, stagger: 0.08 }, 0.55)
        .to(".signal-final", { y: 0, opacity: 1 }, 0.7);
    });

    media.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".testimonial-card");
      gsap.set(cards.slice(1), { yPercent: 125, rotate: 10, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".testimonials-scene",
            start: "top 17%",
            end: "+=230%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .fromTo(
          ".testimonial-intro",
          { y: 70, opacity: 0, filter: "blur(10px)" },
          { y: 0, opacity: 1, filter: "blur(0px)" },
          0,
        )
        .to(
          cards[0],
          { scale: 0.9, xPercent: -12, rotate: -7, opacity: 0.52 },
          0.35,
        )
        .to(cards[1], { yPercent: 0, rotate: 0, opacity: 1 }, 0.35)
        .to(
          cards[1],
          { scale: 0.9, xPercent: 12, rotate: 7, opacity: 0.52 },
          0.63,
        )
        .to(cards[2], { yPercent: 0, rotate: 0, opacity: 1 }, 0.63)
        .to(
          ".testimonial-orb",
          { scale: 1.45, rotate: 180, opacity: 0.85 },
          0.1,
        );
    });
    media.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 46, opacity: 0, rotate: 3 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.14,
          scrollTrigger: { trigger: ".testimonials-scene", start: "top 74%" },
        },
      );
    });

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
      media.revert();
      lenis.destroy();
    };
  }, []);
}

function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 1800);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050b12] text-white"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto flex h-28 w-52 items-center justify-center"
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[var(--primary)]/20 blur-3xl"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Image
                src="/bigwig-logo.png"
                alt="Bigwig Media"
                width={210}
                height={90}
                className="relative z-10 h-auto w-48 object-contain"
                priority
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-xs font-black uppercase tracking-[.36em] text-[var(--accent)]"
            >
              Loading Bigwig Media
            </motion.p>

            {/* Progress */}
            <div className="mx-auto mt-5 h-[2px] w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.6,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  useCinematicMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [line, setLine] = useState(0);
  const story = useMemo(
    () => "YOUR BRAND DESERVES MORE THAN JUST A SCROLL.",
    [],
  );
  useEffect(() => {
    const id = window.setInterval(
      () => setLine((i) => (i + 1) % rotatingLines.length),
      1800,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <main className="cinematic-site relative overflow-x-clip bg-[#05070b] text-white">
      <Loader />
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10">
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between rounded-full border border-white/10 bg-[#05070b]/80 px-5 py-3 backdrop-blur-xl">
          {/* Logo */}
          <a
            href="#home"
            className="flex shrink-0 items-center"
            aria-label="Bigwig Media Home"
          >
            <Image
              src="/bigwig-logo.png"
              alt="Bigwig Media"
              width={150}
              height={55}
              className="h-auto w-[115px] sm:w-[135px]"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[.14em] text-white/60 md:flex">
            <a
              href="#home"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Home
            </a>

            <a
              href="#platforms"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Platforms
            </a>

            <a
              href="#services"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Services
            </a>

            <a
              href="#process"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Process
            </a>

            <a
              href="#work"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Our Work
            </a>

            <a
              href="#results"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Results
            </a>

            <a
              href="#faq"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              FAQ
            </a>
          </div>

          {/* Desktop Contact CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-black uppercase tracking-[.12em] text-white transition-all duration-300 hover:bg-[var(--accent-hover)] md:flex"
          >
            Contact Us
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="mx-2 mt-2 overflow-hidden rounded-[24px] border border-white/10 bg-[#0d1119]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="grid">
                {[
                  ["Home", "#home"],
                  ["Platforms", "#platforms"],
                  ["Services", "#services"],
                  ["Process", "#process"],
                  ["Our Work", "#work"],
                  ["Results", "#results"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/[.07] py-4 text-sm font-bold uppercase tracking-[.14em] text-white/70 transition-colors hover:text-[var(--accent)]"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Mobile Contact CTA */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 text-xs font-black uppercase tracking-[.14em] text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section
        id="home"
        className="hero-scene relative min-h-[700px] overflow-hidden bg-[#05070b] md:min-h-screen"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 cinematic-grid opacity-60" />

        {/* BigWig Brand Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(21,90,156,.22),transparent_30%),radial-gradient(circle_at_68%_55%,rgba(242,63,73,.10),transparent_25%),linear-gradient(180deg,transparent_35%,#05070b_90%)]" />

        {/* Large Orbit */}
        <div className="hero-orbit absolute left-1/2 top-1/2 h-[76vmin] w-[76vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)]/30" />

        {/* Inner Orbit */}
        <div className="hero-orbit absolute left-1/2 top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

        {/* Hero Content */}
        <div className="hero-copy relative z-10 grid min-h-[700px] place-items-center px-5 pb-28 pt-32 text-center md:min-h-screen">
          <div>
            {/* Eyebrow */}
            <p className="mb-6 text-xs font-black uppercase tracking-[.34em] text-[var(--accent)]">
              Social Media Marketing That Moves Brands Forward
            </p>

            {/* Main Heading */}
            <h1 className="mx-auto max-w-6xl text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[.82] tracking-[-.06em]">
              Stop the scroll.
              <br />
              <span className="text-[var(--primary-light)]">
                Start conversations.
              </span>
              <br />
              <span className="text-[var(--accent)]">Drive growth.</span>
            </h1>

            {/* Rotating Line */}
            <p className="mt-8 text-sm font-bold uppercase tracking-[.16em] text-white/60 md:text-base">
              {rotatingLines[line]}

              <span className="ml-2 inline-block h-5 w-px animate-pulse bg-[var(--accent)] align-middle" />
            </p>
          </div>
        </div>

        {/* Social Network */}
        <div className="hero-network pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[min(84vw,760px)] w-[min(84vw,760px)] -translate-x-1/2 -translate-y-1/2 opacity-80">
          {/* Outer Orbit */}
          <div className="network-orbit absolute inset-[5%] rounded-full border border-dashed border-[var(--primary)]/35" />

          {/* Inner Orbit */}
          <div className="network-orbit network-orbit-slow absolute inset-[20%] rounded-full border border-white/10" />

          {/* Center */}
          <div className="network-center absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 shadow-[0_0_80px_rgba(242,63,73,.25)]">
            <span className="text-4xl font-black text-[var(--accent)]">#</span>

            <span className="absolute -bottom-7 whitespace-nowrap text-[9px] font-black uppercase tracking-[.25em] text-[var(--accent)]">
              Your Brand
            </span>
          </div>

          {/* Social Platforms */}
          <div className="network-orbit absolute inset-[5%] rounded-full">
            {networkPlatforms.map(({ name, icon: Icon, color, position }) => (
              <div key={name} className={`network-icon absolute ${position}`}>
                <div
                  className="network-icon-inner grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-[#0b1018]/90 text-xl shadow-xl backdrop-blur"
                  style={{
                    color,
                    boxShadow: `0 0 30px ${color}20`,
                  }}
                >
                  <Icon />
                </div>

                <span className="mt-2 block text-center text-[9px] font-bold uppercase tracking-wider text-white/55">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Transition Text */}
        <div className="hero-next absolute inset-x-0 bottom-10 z-30 translate-y-12 px-5 text-center opacity-0">
          <p className="text-2xl font-black uppercase leading-[.86] md:text-5xl">
            Create attention.
            <br />
            <span className="text-[var(--accent)]">Turn it into impact.</span>
          </p>
        </div>
      </section>

      <section className="story-scene relative min-h-screen overflow-hidden px-5 py-32 md:px-12 lg:px-16">
        {/* Brand Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(21,90,156,.20),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(242,63,73,.14),transparent_30%)]" />

        {/* Eyebrow */}
        <p
          data-reveal
          className="relative text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]"
        >
          More Than Likes & Followers
        </p>

        {/* Animated Statement */}
        <h2 className="relative mt-10 max-w-7xl text-[clamp(3.4rem,8vw,8.2rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
          {story.split("").map((letter, i) => (
            <span className="story-letter inline-block origin-bottom" key={i}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </h2>

        {/* Supporting Content */}
        <p
          data-reveal
          className="relative mt-14 max-w-3xl text-lg leading-8 text-white/65 md:text-2xl md:leading-10"
        >
          At BigWig Media, we turn social media into a powerful growth channel.
          From scroll-stopping content and strategic campaigns to community
          engagement and performance marketing, we help brands{" "}
          <span className="font-semibold text-white">
            get noticed, stay relevant, and turn attention into real business
            growth.
          </span>
        </p>
      </section>

      <section
        id="features"
        className="relative overflow-hidden bg-[#0b1018] px-5 py-24 md:px-12 md:py-32 lg:px-16"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[.10] blur-[140px]" />

          <div className="absolute bottom-[-30%] right-[-8%] h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[.07] blur-[150px]" />

          <div className="cinematic-grid absolute inset-0 opacity-20" />
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          {/* Heading */}
          <div
            data-reveal
            className="grid items-end gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_.85fr]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_20px_rgba(242,63,73,.8)]" />

                <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                  The BigWig Approach
                </p>
              </div>

              <h2 className="mt-7 max-w-4xl text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
                Built to make
                <br />
                brands{" "}
                <span className="text-[var(--primary-light)]">impossible</span>
                <br />
                to ignore.
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
                Great social media is not about posting more. It&apos;s about
                understanding what people care about, creating something worth
                stopping for, and building a brand they want to follow.
              </p>

              <div className="mt-7 flex items-center gap-3 text-[10px] font-black uppercase tracking-[.18em] text-white/35">
                <span className="h-px w-10 bg-[var(--accent)]" />
                Strategy × Creativity × Data
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {features.map(([title, text], index) => (
              <article
                key={title}
                data-reveal
                className="group relative min-h-[300px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0e151f] p-7 transition-all duration-500 hover:border-white/20 md:p-9"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full blur-[90px] transition-all duration-700 group-hover:scale-125 ${
                    index % 2 === 0
                      ? "bg-[var(--primary)]/15"
                      : "bg-[var(--accent)]/10"
                  }`}
                />

                {/* Top */}
                <div className="relative flex items-start justify-between">
                  <span
                    className={`text-xs font-black tracking-[.22em] ${
                      index % 2 === 0
                        ? "text-[var(--primary-light)]"
                        : "text-[var(--accent)]"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <div className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.035] transition-all duration-500 group-hover:rotate-45 group-hover:border-white/20">
                    <ArrowUpRight size={17} className="text-white/55" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-24">
                  <h3 className="max-w-md text-2xl font-black uppercase leading-[.95] tracking-[-.04em] md:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 md:text-base">
                    {text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full ${
                    index % 2 === 0
                      ? "bg-[var(--primary-light)]"
                      : "bg-[var(--accent)]"
                  }`}
                />
              </article>
            ))}
          </div>

          {/* Bottom statement */}
          <div
            data-reveal
            className="mt-6 flex flex-col justify-between gap-5 rounded-[24px] border border-white/10 bg-white/[.025] px-7 py-6 md:flex-row md:items-center md:px-9"
          >
            <p className="text-sm font-bold uppercase tracking-[.08em] text-white/55">
              Not just content for the feed.
              <span className="ml-2 text-white">
                A social presence built for growth.
              </span>
            </p>

            <a
              href="#services"
              className="group flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]"
            >
              Explore our services
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="platforms"
        className="platforms-scene relative min-h-screen overflow-hidden bg-[#070b12]"
      >
        {/* Background */}
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-25" />

        <div className="pointer-events-none absolute left-[5%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/[.12] blur-[150px]" />

        <div className="pointer-events-none absolute bottom-[-10%] right-[5%] h-[400px] w-[400px] rounded-full bg-[var(--accent)]/[.08] blur-[150px]" />

        <div className="relative mx-auto grid min-h-screen max-w-[1400px] items-center gap-12 px-5 py-20 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-16">
          {" "}
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />

              <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                Built For Every Feed
              </p>
            </div>

            <h2 className="mt-8 text-[clamp(3rem,5.7vw,6.5rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
              Different
              <br />
              platforms.
              <br />
              <span className="text-[var(--primary-light)]">
                One strong
                <br />
                brand.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/55 md:text-lg md:leading-8">
              Your audience doesn&apos;t behave the same way everywhere. We
              adapt your strategy, creative and communication to each platform
              while keeping your brand unmistakably yours.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--accent)]" />

              <span className="text-[10px] font-black uppercase tracking-[.18em] text-white/35">
                Scroll to explore platforms
              </span>
            </div>
          </div>
          {/* RIGHT SCREEN */}
          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="pointer-events-none absolute inset-10 rounded-full bg-[var(--primary)]/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0b111b] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
              {/* Screen header */}
              <div className="flex h-16 items-center justify-between border-b border-white/10 bg-white/[.025] px-6">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div className="rounded-full border border-white/10 bg-black/20 px-5 py-2">
                  <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/35">
                    BigWig / Social Network
                  </span>
                </div>

                <span className="text-[9px] font-black uppercase tracking-[.15em] text-[var(--accent)]">
                  Live
                </span>
              </div>

              {/* Actual scrolling screen */}
              <div className="platform-screen-viewport relative h-[500px] overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-[#0b111b] to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#0b111b] to-transparent" />

                <div className="platform-screen-track px-5 py-10 md:px-8">
                  <div className="mb-8 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">
                        Connected channels
                      </p>

                      <h3 className="mt-2 text-2xl font-black uppercase tracking-[-.04em]">
                        Your social ecosystem
                      </h3>
                    </div>

                    <span className="text-xs font-bold text-white/30">
                      {supportedPlatforms.length} Platforms
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {supportedPlatforms.map(
                      ({ name, icon: Icon, color, type }, index) => (
                        <article
                          key={name}
                          className="group relative min-h-[190px] overflow-hidden rounded-[22px] border border-white/10 bg-[#101823] p-6 transition-colors hover:border-white/20"
                        >
                          <div
                            className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full opacity-10 blur-[60px]"
                            style={{ backgroundColor: color }}
                          />

                          <div className="relative flex h-full items-center gap-6">
                            <div
                              className="grid h-16 w-16 shrink-0 place-items-center rounded-[20px] border border-white/10 bg-white/[.04] text-3xl"
                              style={{
                                color,
                                boxShadow: `0 0 40px ${color}12`,
                              }}
                            >
                              <Icon />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-black uppercase tracking-[-.04em]">
                                  {name}
                                </h3>

                                <span className="text-[10px] font-black tracking-[.2em] text-white/20">
                                  0{index + 1}
                                </span>
                              </div>

                              <p
                                className="mt-2 text-[10px] font-black uppercase tracking-[.15em]"
                                style={{ color }}
                              >
                                {type}
                              </p>

                              <div className="mt-5 flex items-center gap-2">
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{ backgroundColor: color }}
                                />

                                <span className="text-[9px] font-bold uppercase tracking-[.14em] text-white/30">
                                  Strategy connected
                                </span>
                              </div>
                            </div>
                          </div>

                          <div
                            className="absolute bottom-0 left-0 h-[2px] w-full opacity-50"
                            style={{ backgroundColor: color }}
                          />
                        </article>
                      ),
                    )}
                  </div>

                  {/* Final card */}
                  <div className="mt-4 rounded-[22px] border border-[var(--accent)]/20 bg-[var(--accent)]/[.05] p-7">
                    <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--accent)]">
                      One connected strategy
                    </p>

                    <h3 className="mt-3 max-w-md text-2xl font-black uppercase leading-tight tracking-[-.04em]">
                      Every platform gets the strategy it deserves.
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">
                      We create for how people actually use each platform
                      instead of copying the same content everywhere.
                    </p>
                  </div>
                </div>
              </div>

              {/* Screen footer */}
              <div className="relative z-30 flex h-14 items-center justify-between border-t border-white/10 bg-[#0b111b] px-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />

                  <span className="text-[9px] font-black uppercase tracking-[.16em] text-white/35">
                    Scroll active
                  </span>
                </div>

                <span className="text-[9px] font-black uppercase tracking-[.15em] text-white/25">
                  BigWig Media
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="services-scene relative h-screen overflow-hidden bg-[#05070b]"
      >
        {/* Background */}
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute left-[5%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/[.10] blur-[150px]" />

        <div className="pointer-events-none absolute bottom-[-10%] right-[5%] h-[420px] w-[420px] rounded-full bg-[var(--accent)]/[.07] blur-[150px]" />

        <div className="relative flex h-screen items-center overflow-hidden">
          <div className="services-track flex w-max items-center gap-5 px-[7vw]">
            {/* ================= INTRO SLIDE ================= */}
            <div className="flex h-[68vh] w-[82vw] shrink-0 flex-col justify-between py-3 md:w-[58vw] lg:w-[46vw]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />

                  <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                    What We Do
                  </p>
                </div>

                <h2 className="mt-8 text-[clamp(3.3rem,6vw,6.3rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
                  Everything
                  <br />
                  your brand
                  <br />
                  <span className="text-[var(--primary-light)]">needs to</span>
                  <br />
                  <span className="text-[var(--accent)]">stay social.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-lg text-base leading-7 text-white/55 md:text-lg">
                  Strategy, content, communities and campaigns — connected into
                  one social media system built to make your brand visible,
                  relevant and worth following.
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[.18em] text-white/35">
                    Scroll to explore
                  </span>

                  <span className="h-px w-16 bg-white/20" />

                  <ArrowUpRight
                    size={16}
                    className="rotate-45 text-[var(--accent)]"
                  />
                </div>
              </div>
            </div>

            {/* ================= SERVICE CARDS ================= */}

            {services.map(([title, text, color], index) => (
              <a
                href="#contact"
                key={title}
                className="group relative flex h-[68vh] w-[80vw] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#0d141e] p-7 transition-colors duration-500 hover:border-white/20 md:w-[56vw] md:p-9 lg:w-[43vw]"
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute right-[-15%] top-[-15%] h-[350px] w-[350px] rounded-full opacity-[.10] blur-[110px] transition-all duration-700 group-hover:scale-125 group-hover:opacity-20"
                  style={{
                    backgroundColor: color,
                  }}
                />

                {/* TOP */}
                <div className="relative flex items-start justify-between">
                  <div>
                    <span
                      className="text-xs font-black uppercase tracking-[.22em]"
                      style={{ color }}
                    >
                      Service
                    </span>

                    <span className="ml-3 text-xs font-black tracking-[.2em] text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  <div
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[.035] transition-transform duration-500 group-hover:rotate-45"
                    style={{ color }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* MAIN */}
                <div className="relative">
                  {/* decorative line */}
                  <div className="mb-7 flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: color,
                        boxShadow: `0 0 18px ${color}`,
                      }}
                    />

                    <span className="h-px w-10 bg-white/15" />
                  </div>

                  <h3 className="max-w-[12ch] text-[clamp(2.5rem,4.8vw,4.8rem)] font-black uppercase leading-[.86] tracking-[-.055em]">
                    {title}
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-white/50 md:text-base">
                    {text}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="relative flex items-end justify-between border-t border-white/[.08] pt-5">
                  <span className="text-[9px] font-black uppercase tracking-[.18em] text-white/30">
                    BigWig Social
                  </span>

                  <span
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.15em]"
                    style={{ color }}
                  >
                    Let&apos;s talk
                    <ArrowUpRight size={13} />
                  </span>
                </div>

                {/* Bottom animated accent */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                  style={{
                    backgroundColor: color,
                  }}
                />
              </a>
            ))}

            {/* ================= END SLIDE ================= */}

            <div className="flex h-[68vh] w-[70vw] shrink-0 items-center justify-center md:w-[48vw] lg:w-[38vw]">
              <div className="max-w-md">
                <p className="text-xs font-black uppercase tracking-[.3em] text-[var(--accent)]">
                  Need something specific?
                </p>

                <h3 className="mt-7 text-[clamp(3rem,5vw,5rem)] font-black uppercase leading-[.86] tracking-[-.055em]">
                  Let&apos;s build
                  <br />
                  what your
                  <br />
                  <span className="text-[var(--primary-light)]">
                    brand needs.
                  </span>
                </h3>

                <a
                  href="#contact"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 text-xs font-black uppercase tracking-[.14em] text-white"
                >
                  Start a conversation
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="w-[5vw] shrink-0" />
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section
        id="process"
        className="process-pipeline relative min-h-screen overflow-hidden bg-[#070b12]"
      >
        {/* Background */}
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute left-[5%] top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--primary)]/[.10] blur-[150px]" />

        <div className="pointer-events-none absolute bottom-[-10%] right-[5%] h-[420px] w-[420px] rounded-full bg-[var(--accent)]/[.08] blur-[150px]" />

        {/* ================= DESKTOP ================= */}
        <div className="process-desktop relative hidden h-screen lg:block">
          <div className="mx-auto flex h-full max-w-[1400px] flex-col px-16 pb-12 pt-28">
            {/* HEADER */}
            <div className="process-pipeline-header flex items-end justify-between gap-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />

                  <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                    How We Work
                  </p>
                </div>

                <h2 className="mt-5 text-[clamp(2.8rem,4.5vw,5rem)] font-black uppercase leading-[.84] tracking-[-.055em]">
                  One idea.
                  <br />
                  <span className="text-[var(--primary-light)]">
                    Built for
                  </span>{" "}
                  <span className="text-[var(--accent)]">growth.</span>
                </h2>
              </div>

              <div className="max-w-md pb-1">
                <p className="text-sm leading-7 text-white/50">
                  Research becomes strategy. Strategy becomes creative. Creative
                  becomes data. Data makes everything that follows stronger.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[var(--accent)]" />
                  <span className="text-[9px] font-black uppercase tracking-[.18em] text-white/30">
                    Scroll to run the process
                  </span>
                </div>
              </div>
            </div>

            {/* ================= PIPELINE ================= */}

            <div className="relative mt-12 flex flex-1 items-center">
              <div className="relative w-full">
                {/* Base line */}
                <div className="absolute left-[8%] right-[8%] top-[32px] h-px bg-white/10" />

                {/* Animated progress line */}
                <div className="process-flow-line absolute left-[8%] top-[31px] h-[2px] w-[84%] origin-left scale-x-0 bg-gradient-to-r from-[var(--primary-light)] via-[#8B5CF6] to-[var(--accent)] shadow-[0_0_15px_rgba(242,63,73,.35)]" />

                {/* Moving signal */}
                <div className="process-signal absolute left-[8%] top-[24px] z-30 h-4 w-4 -translate-x-1/2 rounded-full bg-white opacity-0 shadow-[0_0_10px_white,0_0_30px_var(--accent)]">
                  <span className="absolute inset-[-8px] animate-ping rounded-full border border-white/20" />
                </div>

                {/* ================= NODES ================= */}

                <div className="relative grid grid-cols-4">
                  {[
                    {
                      number: "01",
                      title: "Discover",
                      label: "Understand",
                      description:
                        "We uncover the audience, competitors, opportunities and challenges shaping your social presence.",
                      tags: ["Audience", "Brand", "Competitors"],
                      color: "#2F7CF6",
                    },
                    {
                      number: "02",
                      title: "Strategise",
                      label: "Direction",
                      description:
                        "Insights become a clear roadmap for platforms, content, campaigns and measurable business goals.",
                      tags: ["Content Pillars", "Platforms", "Campaigns"],
                      color: "#8B5CF6",
                    },
                    {
                      number: "03",
                      title: "Create",
                      label: "Execution",
                      description:
                        "Ideas turn into platform-native creative designed to earn attention and make the brand memorable.",
                      tags: ["Reels", "Carousels", "Stories"],
                      color: "#F23F49",
                    },
                    {
                      number: "04",
                      title: "Optimise",
                      label: "Growth",
                      description:
                        "Performance signals tell us what works so every campaign and piece of content becomes stronger.",
                      tags: ["Analyse", "Improve", "Scale"],
                      color: "#34E0A1",
                    },
                  ].map((step, index) => (
                    <div
                      key={step.number}
                      className="process-flow-step relative flex flex-col items-center px-5 text-center"
                    >
                      {/* NODE */}
                      <div
                        className="process-flow-node relative z-20 grid h-16 w-16 place-items-center rounded-full border bg-[#070b12]"
                        style={{
                          borderColor: `${step.color}55`,
                        }}
                      >
                        <span
                          className="process-node-dot h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor: step.color,
                            boxShadow: `0 0 18px ${step.color}`,
                          }}
                        />

                        <span
                          className="process-node-ring absolute inset-0 rounded-full border opacity-0"
                          style={{ borderColor: step.color }}
                        />
                      </div>

                      {/* NUMBER */}
                      <span
                        className="mt-5 text-[9px] font-black uppercase tracking-[.22em]"
                        style={{ color: step.color }}
                      >
                        {step.number} / {step.label}
                      </span>

                      {/* TITLE */}
                      <h3 className="mt-3 text-2xl font-black uppercase tracking-[-.04em] xl:text-3xl">
                        {step.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="process-step-description mt-4 max-w-[260px] text-sm leading-6 text-white/45">
                        {step.description}
                      </p>

                      {/* TAGS */}
                      <div className="mt-5 flex max-w-[260px] flex-wrap justify-center gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="process-tag translate-y-3 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[8px] font-black uppercase tracking-[.12em] text-white/40 opacity-0"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ================= INPUT PARTICLES ================= */}

                <div className="process-inputs pointer-events-none absolute left-[12.5%] top-[-55px]">
                  {["AUDIENCE", "BRAND", "COMPETITORS"].map((item, index) => (
                    <span
                      key={item}
                      className="process-input absolute whitespace-nowrap rounded-full border border-[#2F7CF6]/20 bg-[#2F7CF6]/10 px-3 py-1.5 text-[8px] font-black tracking-[.14em] text-[#70A8FF] opacity-0"
                      style={{
                        transform: `translate(${(index - 1) * 70}px, ${
                          index % 2 ? -30 : 0
                        }px)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ================= CREATIVE OUTPUT ================= */}

                <div className="process-creative-output pointer-events-none absolute left-[62.5%] top-[-50px]">
                  {["REELS", "POSTS", "STORIES"].map((item, index) => (
                    <span
                      key={item}
                      className="process-output absolute whitespace-nowrap rounded-lg border border-[#F23F49]/20 bg-[#F23F49]/10 px-3 py-2 text-[8px] font-black tracking-[.14em] text-[#FF737B] opacity-0"
                      style={{
                        transform: `translate(${(index - 1) * 68}px, ${
                          index === 1 ? -35 : 0
                        }px)`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}

        <div className="relative px-5 py-24 md:px-12 lg:hidden">
          <div>
            <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
              How We Work
            </p>

            <h2 className="mt-6 text-[clamp(3rem,11vw,5rem)] font-black uppercase leading-[.85] tracking-[-.055em]">
              One idea.
              <br />
              <span className="text-[var(--primary-light)]">Built for</span>
              <br />
              <span className="text-[var(--accent)]">growth.</span>
            </h2>
          </div>

          <div className="relative mt-16">
            {/* vertical line */}
            <div className="absolute bottom-10 left-[23px] top-8 w-px bg-white/10" />

            {[
              {
                number: "01",
                title: "Discover",
                text: "Audience, brand, competitors and opportunities.",
                color: "#2F7CF6",
              },
              {
                number: "02",
                title: "Strategise",
                text: "Platforms, content pillars and campaign direction.",
                color: "#8B5CF6",
              },
              {
                number: "03",
                title: "Create",
                text: "Reels, stories, posts and platform-native creative.",
                color: "#F23F49",
              },
              {
                number: "04",
                title: "Optimise",
                text: "Analyse performance, improve and scale what works.",
                color: "#34E0A1",
              },
            ].map((step) => (
              <div
                key={step.number}
                data-reveal
                className="relative flex gap-6 pb-14 last:pb-0"
              >
                <div
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border bg-[#070b12] text-[9px] font-black"
                  style={{
                    borderColor: step.color,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>

                <div className="pt-1">
                  <h3 className="text-2xl font-black uppercase tracking-[-.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS END ================= */}

      <section className="growth-scene relative min-h-screen overflow-hidden bg-[#05070b] px-5 py-16 md:px-12 lg:px-16 lg:py-12">
        {/* Background */}
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-15" />

        <div className="pointer-events-none absolute left-[15%] top-[25%] h-80 w-80 rounded-full bg-[var(--primary)]/[.10] blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[10%] right-[12%] h-80 w-80 rounded-full bg-[var(--accent)]/[.08] blur-[120px]" />

        {/* Center */}
        <div className="growth-core absolute left-1/2 top-1/2 z-20 hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0b1119]/95 text-center shadow-[0_0_80px_rgba(21,90,156,.18)] backdrop-blur-xl lg:grid">
          <div>
            <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />

            <span className="text-[9px] font-black uppercase leading-4 tracking-[.18em] text-white/70">
              Social
              <br />
              Growth
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1320px] items-center gap-4 lg:grid-cols-2">
          {/* ================= ORGANIC ================= */}

          <article className="growth-vendor group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#0c141e] p-7 shadow-2xl md:p-8 lg:pr-16">
            {/* Glow */}
            <div className="absolute left-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[var(--primary)]/15 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[.25em] text-[var(--primary-light)]">
                  01 / Organic Social
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-white/25 transition-transform duration-500 group-hover:rotate-45"
                />
              </div>

              <h2 className="mt-7 max-w-md text-[clamp(2.5rem,4vw,4.2rem)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Build an
                <br />
                audience that
                <br />
                <span className="text-[var(--primary-light)]">
                  chooses you.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/55 md:text-base md:leading-7">
                Organic social builds familiarity, trust and community around
                your brand through content people genuinely want to consume.
              </p>
            </div>

            <div className="relative mt-7">
              <div className="grid gap-2">
                {[
                  "Content strategy & calendars",
                  "Reels, posts, stories & carousels",
                  "Community engagement",
                  "Trend & culture participation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-white/[.08] pt-2.5 text-xs font-bold text-white/65 md:text-sm"
                  >
                    <span className="text-[var(--primary-light)]">+</span>
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[9px] font-black uppercase tracking-[.16em] text-[var(--primary-light)]">
                Build attention → trust → community
              </p>
            </div>
          </article>

          {/* ================= PAID ================= */}

          <article className="growth-blog group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[26px] border border-white/10 bg-[#141016] p-7 shadow-2xl md:p-8 lg:pl-16">
            {/* Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[var(--accent)]/15 blur-[100px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black uppercase tracking-[.25em] text-[var(--accent)]">
                  02 / Paid Social
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-white/25 transition-transform duration-500 group-hover:rotate-45"
                />
              </div>

              <h2 className="mt-7 max-w-md text-[clamp(2.5rem,4vw,4.2rem)] font-black uppercase leading-[.86] tracking-[-.055em]">
                Turn
                <br />
                attention into
                <br />
                <span className="text-[var(--accent)]">action.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/55 md:text-base md:leading-7">
                Paid campaigns amplify your strongest ideas, reach high-intent
                audiences and turn social attention into measurable business
                outcomes.
              </p>
            </div>

            <div className="relative mt-7">
              <div className="grid gap-2">
                {[
                  "Audience targeting & retargeting",
                  "Creative testing & optimisation",
                  "Lead & conversion campaigns",
                  "Performance tracking & reporting",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-white/[.08] pt-2.5 text-xs font-bold text-white/65 md:text-sm"
                  >
                    <span className="text-[var(--accent)]">+</span>
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[9px] font-black uppercase tracking-[.16em] text-[var(--accent)]">
                Reach → convert → optimise → scale
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="work"
        className="testimonials-scene relative min-h-screen overflow-hidden bg-[#05070b] px-5 py-20 md:h-screen md:px-12 md:py-0 lg:px-16"
      >
        {/* Orb */}
        <div className="testimonial-orb absolute left-1/2 top-1/2 h-[58vmin] w-[58vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/[.035] shadow-[0_0_150px_rgba(21,90,156,.12)]" />

        <div className="cinematic-grid absolute inset-0 opacity-25" />

        <div className="relative mx-auto grid min-h-[80vh] max-w-[1350px] items-center gap-12 lg:grid-cols-[.72fr_1.28fr]">
          {/* LEFT */}
          <div className="testimonial-intro relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                Client Stories
              </p>
            </div>

            <h2 className="mt-8 max-w-xl text-[clamp(3rem,5.4vw,6rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
              Work that
              <br />
              makes brands
              <br />
              <span className="text-[var(--primary-light)]">move.</span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-white/55 md:text-lg md:leading-8">
              Great social media should change more than your feed. It should
              change how people see, remember and interact with your brand.
            </p>

            <div className="mt-9 flex items-center gap-3 text-[10px] font-black uppercase tracking-[.16em] text-white/35">
              <span className="text-[var(--accent)]">01</span>

              <span className="h-px w-12 bg-white/20" />

              <span>03 stories</span>
            </div>
          </div>

          {/* CARDS */}
          <div className="relative min-h-[430px] md:min-h-[500px]">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name + index}
                className="testimonial-card absolute inset-x-0 top-0 flex min-h-[410px] flex-col justify-between rounded-[28px] border border-white/15 bg-[#101722]/90 p-7 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-xl md:min-h-[470px] md:p-9"
                style={{
                  zIndex: index + 1,
                  boxShadow: `inset 0 0 90px ${testimonial.color}12, 0 30px 80px rgba(0,0,0,.45)`,
                }}
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-5xl font-black leading-none"
                    style={{ color: testimonial.color }}
                  >
                    &ldquo;
                  </span>

                  <div className="rounded-2xl border border-white/10 bg-white/[.025] px-4 py-3 text-right">
                    <strong
                      className="block text-xl font-black"
                      style={{ color: testimonial.color }}
                    >
                      {testimonial.score}
                    </strong>

                    <span className="mt-1 block text-[8px] font-black uppercase tracking-[.15em] text-white/35">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>

                {/* QUOTE */}
                <blockquote className="max-w-3xl text-[clamp(1.6rem,2.8vw,3rem)] font-black leading-[.98] tracking-[-.045em]">
                  {testimonial.quote}
                </blockquote>

                {/* FOOTER */}
                <footer className="flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="font-black uppercase tracking-[-.02em]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-white/40">
                      {testimonial.role}
                    </p>
                  </div>

                  <div
                    className="flex gap-1 text-sm"
                    style={{ color: testimonial.color }}
                  >
                    ★★★★★
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        className="results-scene relative overflow-hidden bg-[#080c13] px-5 py-24 md:px-12 lg:px-16 lg:py-28"
      >
        {/* Background */}
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-25" />

        <div className="pointer-events-none absolute left-[5%] top-[20%] h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[5%] right-[8%] h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1350px] items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
          {/* LEFT */}
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />

              <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                Built For Social Growth
              </p>
            </div>

            <h2 className="mt-8 max-w-xl text-[clamp(3rem,5.5vw,6rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
              More than
              <br />
              posting.
              <br />
              <span className="text-[var(--primary-light)]">
                Built to grow.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/55 md:text-lg md:leading-8">
              We connect strategy, content, community, paid media and analytics
              into one social system designed to keep your brand visible,
              relevant and moving forward.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {stats.map(([value, label], index) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[.035] p-5 transition duration-500 hover:border-white/20 hover:bg-white/[.055]"
                >
                  <span className="absolute right-4 top-3 text-[9px] font-black tracking-[.15em] text-white/15">
                    0{index + 1}
                  </span>

                  <strong className="block text-3xl font-black tracking-[-.04em] text-[var(--accent)] md:text-4xl">
                    {value}
                  </strong>

                  <span className="mt-3 block text-[10px] font-bold uppercase tracking-[.14em] text-white/45">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — SOCIAL ECOSYSTEM */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* Outer rings */}
            <div className="absolute inset-[4%] rounded-full border border-dashed border-white/10" />

            <div className="absolute inset-[18%] rounded-full border border-[var(--primary)]/15" />

            <div className="absolute inset-[32%] rounded-full border border-[var(--accent)]/15" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[70px]" />

            {/* SVG connections */}
            <svg
              viewBox="0 0 600 600"
              className="absolute inset-0 h-full w-full"
            >
              {[
                "M300 300 L300 75",
                "M300 300 L525 300",
                "M300 300 L300 525",
                "M300 300 L75 300",
              ].map((line) => (
                <path
                  key={line}
                  className="globe-line"
                  d={line}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeDasharray="700"
                  strokeDashoffset="700"
                  opacity=".45"
                />
              ))}
            </svg>

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 z-10 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--accent)]/30 bg-[#0c141e]/95 text-center shadow-[0_0_80px_rgba(242,63,73,.12)] backdrop-blur-xl">
              <div>
                <span className="mx-auto mb-3 block h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_15px_var(--accent)]" />

                <strong className="text-xs font-black uppercase leading-5 tracking-[.15em] text-white">
                  Your
                  <br />
                  Brand
                </strong>
              </div>
            </div>

            {/* TOP */}
            <div className="absolute left-1/2 top-[3%] z-20 -translate-x-1/2">
              <div className="rounded-2xl border border-white/10 bg-[#101722]/95 px-5 py-3 text-center backdrop-blur">
                <span className="text-[9px] font-black uppercase tracking-[.16em] text-[var(--primary-light)]">
                  Content
                </span>
                <p className="mt-1 whitespace-nowrap text-xs font-bold text-white/55">
                  Create attention
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="absolute right-[-2%] top-1/2 z-20 -translate-y-1/2">
              <div className="rounded-2xl border border-white/10 bg-[#101722]/95 px-5 py-3 text-center backdrop-blur">
                <span className="text-[9px] font-black uppercase tracking-[.16em] text-[var(--accent)]">
                  Paid Media
                </span>
                <p className="mt-1 whitespace-nowrap text-xs font-bold text-white/55">
                  Scale attention
                </p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="absolute bottom-[3%] left-1/2 z-20 -translate-x-1/2">
              <div className="rounded-2xl border border-white/10 bg-[#101722]/95 px-5 py-3 text-center backdrop-blur">
                <span className="text-[9px] font-black uppercase tracking-[.16em] text-[#34e0a1]">
                  Analytics
                </span>
                <p className="mt-1 whitespace-nowrap text-xs font-bold text-white/55">
                  Improve performance
                </p>
              </div>
            </div>

            {/* LEFT */}
            <div className="absolute left-[-3%] top-1/2 z-20 -translate-y-1/2">
              <div className="rounded-2xl border border-white/10 bg-[#101722]/95 px-5 py-3 text-center backdrop-blur">
                <span className="text-[9px] font-black uppercase tracking-[.16em] text-[#b99cff]">
                  Community
                </span>
                <p className="mt-1 whitespace-nowrap text-xs font-bold text-white/55">
                  Build connection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative overflow-hidden bg-white px-5 py-24 text-[#071121] md:px-12 lg:px-16 lg:py-28"
      >
        {/* Subtle background */}
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[var(--primary)]/[.05] blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1350px] gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          {/* LEFT */}
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                Questions, Answered
              </p>
            </div>

            <h2 className="mt-8 max-w-xl text-[clamp(3rem,5vw,5.8rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
              Social media,
              <br />
              without the
              <br />
              <span className="text-[var(--primary)]">guesswork.</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-[#526071] md:text-lg md:leading-8">
              From content creation and platform management to paid campaigns
              and reporting, here&apos;s what you need to know before we get
              started.
            </p>

            {/* Mini CTA */}
            <div className="mt-10 border-l-2 border-[var(--accent)] pl-5">
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#84909d]">
                Still have a question?
              </p>

              <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[.08em] text-[var(--primary)] transition hover:text-[var(--accent)]"
              >
                Talk to our team
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border-t border-black/10">
            {faqs.map(([q, a], index) => (
              <details
                key={q}
                className="group border-b border-black/10 transition-colors duration-300"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 py-6 md:py-7">
                  {/* Number */}
                  <span className="hidden w-8 shrink-0 text-[9px] font-black tracking-[.15em] text-black/25 sm:block">
                    0{index + 1}
                  </span>

                  {/* Question */}
                  <span className="flex-1 text-lg font-black uppercase leading-6 tracking-[-.02em] md:text-xl md:leading-7">
                    {q}
                  </span>

                  {/* Plus */}
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 text-xl font-light text-[var(--accent)] transition-all duration-300 group-open:rotate-45 group-open:border-[var(--accent)] group-open:bg-[var(--accent)] group-open:text-white">
                    +
                  </span>
                </summary>

                <div className="pb-7 sm:pl-13">
                  <p className="max-w-2xl text-sm leading-7 text-[#526071] md:text-base">
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#05070b] px-5 py-24 md:px-12 lg:px-16 lg:py-28"
      >
        {/* Background */}
        <div className="cinematic-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="pointer-events-none absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/[.10] blur-[160px]" />

        <div className="pointer-events-none absolute right-[5%] top-[10%] h-80 w-80 rounded-full bg-[var(--primary)]/[.12] blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px]">
          {/* ================= MAIN CTA ================= */}

          <div data-reveal className="mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" />

              <p className="text-xs font-black uppercase tracking-[.32em] text-[var(--accent)]">
                Let&apos;s Make Something Move
              </p>
            </div>

            <h2 className="mt-8 text-[clamp(3.8rem,9vw,8.5rem)] font-black uppercase leading-[.78] tracking-[-.07em]">
              Ready to make
              <br />
              your brand
              <br />
              <span className="text-[var(--primary-light)]">impossible</span> to
              ignore?
            </h2>

            <p className="mx-auto mt-9 max-w-2xl text-base leading-7 text-white/55 md:text-lg md:leading-8">
              Tell us where your brand is today and where you want it to go.
              We&apos;ll help you build the social strategy, content and
              campaigns to get it there.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-xs font-black uppercase tracking-[.14em] text-white transition duration-300 hover:scale-105"
            >
              Let&apos;s Talk Social
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* ================= CONTACT INFORMATION ================= */}

          <div className="mt-20 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {/* PHONE */}
            <a
              href="tel:+91XXXXXXXXXX"
              className="group border-b border-white/10 p-6 transition-colors hover:bg-white/[.035] sm:border-r lg:border-b-0 md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/30">
                  01 / Call
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                />
              </div>

              <p className="mt-5 text-xs font-black uppercase tracking-[.15em] text-[var(--accent)]">
                Phone
              </p>

              <p className="mt-2 text-base font-bold text-white/75">
                +91 83685 73451
              </p>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:hello@bigwigdigital.in"
              className="group border-b border-white/10 p-6 transition-colors hover:bg-white/[.035] lg:border-b-0 lg:border-r md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/30">
                  02 / Write
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                />
              </div>

              <p className="mt-5 text-xs font-black uppercase tracking-[.15em] text-[var(--accent)]">
                Email
              </p>

              <p className="mt-2 break-all text-base font-bold text-white/75">
                vipul@bigwigmedia.in
              </p>
            </a>

            {/* ADDRESS */}
            <div className="border-b border-white/10 p-6 sm:border-r lg:border-b-0 md:p-7">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/30">
                  03 / Visit
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary-light)]" />
              </div>

              <p className="mt-5 text-xs font-black uppercase tracking-[.15em] text-[var(--accent)]">
                Office
              </p>

              <p className="mt-2 text-sm font-bold leading-6 text-white/65">
                Your BigWig Media
                <br />
                Office Address, India
              </p>
            </div>

            {/* SOCIALS */}
            <div className="p-6 md:p-7">
              <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/30">
                04 / Follow
              </span>

              <p className="mt-5 text-xs font-black uppercase tracking-[.15em] text-[var(--accent)]">
                Social
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  {
                    label: "Instagram",
                    href: "YOUR_INSTAGRAM_URL",
                  },
                  {
                    label: "LinkedIn",
                    href: "YOUR_LINKEDIN_URL",
                  },
                  {
                    label: "Facebook",
                    href: "YOUR_FACEBOOK_URL",
                  },
                  {
                    label: "YouTube",
                    href: "YOUR_YOUTUBE_URL",
                  },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`BigWig Media on ${label}`}
                    className="group/social inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-[9px] font-black uppercase tracking-[.1em] text-white/50 transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                  >
                    {label}

                    <ArrowUpRight
                      size={10}
                      className="transition-transform group-hover/social:-translate-y-0.5 group-hover/social:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ================= BOTTOM ================= */}

          <div className="mt-8 flex flex-col gap-4 text-[9px] font-bold uppercase tracking-[.16em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <span>BigWig Media & Digital</span>

            <span>Strategy · Content · Community · Performance</span>
          </div>
        </div>
      </section>
    </main>
  );
}
