---
name: reactbits
description: Use React Bits animated components when building React UIs. Trigger this skill when the user asks for animated React components, interactive UI effects, animated text, animated backgrounds, creative landing pages, or mentions "React Bits" / "reactbits". Provides guidance on selecting, installing, and using 110+ animated, interactive, and customizable React components from the React Bits library (reactbits.dev). Use alongside the frontend-design skill for best results.
---

# React Bits — Animated UI Components for React

React Bits (https://reactbits.dev) is an open-source library of 110+ animated, interactive, and fully customizable React components. Use it to add polished motion, visual effects, and creative interactions to React projects.

## When to Use This Skill

- User wants animated text effects (typing, blur, glitch, gradient, split animations)
- User wants animated backgrounds (aurora, particles, grids, waves)
- User wants interactive UI components (animated cards, cursors, click effects)
- User wants to make a React UI more visually engaging or memorable
- User explicitly mentions React Bits or reactbits.dev

## Component Categories

### Text Animations
Animated text effects for headlines, CTAs, and dynamic content:
- **SplitText** — Character/word/line-by-line entrance animations (uses GSAP + ScrollTrigger)
- **BlurText** — Blur-to-focus reveal transitions (uses Framer Motion)
- **GlitchText** — Cyberpunk-style glitch effects
- **ScrambleText** — Matrix-style character scrambling
- **ShinyText** — Metallic shine sweep effects
- **GradientText** — Animated gradient fill on text
- **FuzzyText** — Fuzzy/noisy text effect
- **CircularText** — Text arranged in a circle
- **CountUp** — Animated number counting
- **RotatingText** — Text that cycles through different words
- **TrueFocus** — Highlights/focuses text segments
- **VariableProximity** — Variable font weight changes based on cursor proximity
- **TextCursorProximity** — Text reacts to cursor position
- **FallingText** — Text that falls with physics
- **ScrollText** — Text animated on scroll
- **TextPressure** — Pressure/squeeze text effect

### Animations / Effects
Interactive animations and visual effects:
- **BlobCursor** — Blob that follows the cursor
- **SplashCursor** — Splash effect on cursor movement
- **Magnet** — Elements magnetically attracted to cursor
- **ClickSpark** — Spark/particle burst on click
- **Bounce** — Bounce animation on mount/interaction
- **FadeContent** — Content fades in with optional blur
- **AnimatedContent** — Content entrance with directional slide
- **ScrollReveal** — Elements revealed on scroll
- **Trail** — Cursor trail effect
- **Crosshair** — Crosshair cursor effect
- **FollowCursor** — Element follows cursor
- **Noise** — Animated noise/grain overlay

### Components (UI Elements)
Interactive UI building blocks:
- **StarBorder** — Animated glowing/star border effect
- **AnimatedList** — List items with staggered animations
- **TiltCard** — 3D tilt effect on hover
- **SpotlightCard** — Spotlight follows cursor on card
- **GlowCard** — Card with glowing border effect
- **Dock** — macOS-style dock with magnification
- **InfiniteScroll** — Infinite horizontal/vertical scroll of items
- **PixelTransition** — Pixel-based transition between views
- **ModelViewer** — 3D model viewer (Three.js)
- **Lanyard** — Discord Lanyard status display
- **Ribbons** — Decorative animated ribbons
- **SmoothScroll** — Smooth scroll wrapper

### Backgrounds
Full-screen or section animated backgrounds:
- **Aurora** — Northern lights / aurora borealis effect (Three.js / WebGL)
- **Particles** — Interactive particle system
- **Beams** — Animated light beams
- **GridDistortion** — Animated distorted grid (WebGL)
- **Hyperspeed** — Warp/star-speed effect
- **Ballpit** — Interactive 3D ball pit (Three.js + physics)
- **Waves** — Animated wave patterns
- **Lightning** — Lightning bolt effects
- **Threads** — Animated thread/string patterns
- **Squares** — Animated square grid
- **LetterGlitch** — Full-screen letter glitch background
- **ShapeBlur** — Blurred animated shapes
- **Iridescence** — Iridescent color-shifting background

## Installation Methods

### Option 1: shadcn CLI (Recommended for quick installs)
```bash
npx shadcn@latest add @react-bits/<ComponentName>-<LANGUAGE>-<STYLE>
# Example:
npx shadcn@latest add @react-bits/BlurText-TS-TW
```

Language-Style variants: `JS-CSS`, `JS-TW`, `TS-CSS`, `TS-TW`

### Option 2: jsrepo CLI
```bash
# Default (CSS) variant:
npx jsrepo add https://reactbits.dev/default/<CategoryName>/<ComponentName>

# Tailwind variant:
npx jsrepo add https://reactbits.dev/tailwind/<CategoryName>/<ComponentName>

# Example:
npx jsrepo add https://reactbits.dev/default/TextAnimations/SplitText
```

### Option 3: Copy-Paste
Visit the component page on https://reactbits.dev, select your preferred variant (JS/TS + CSS/Tailwind), and copy the code directly.

## Peer Dependencies

Components use peer dependencies — only install what you need:

```bash
# Required for all
npm install react react-dom

# For 3D components (Aurora, ModelViewer, Ballpit, etc.)
npm install three @react-three/fiber @react-three/drei

# For GSAP-powered animations (SplitText, Bounce, ScrollReveal, etc.)
npm install gsap

# For physics-based components (Ballpit, etc.)
npm install matter-js

# For Framer Motion components (BlurText, FadeContent, etc.)
npm install framer-motion
```

## Usage Patterns

### Basic usage example — text animation:
```jsx
import SplitText from './components/SplitText';

function Hero() {
  return (
    <SplitText
      text="Welcome to the future"
      className="text-5xl font-bold"
      delay={50}
      animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
      animationTo={{ opacity: 1, transform: 'translateY(0)' }}
    />
  );
}
```

### Basic usage example — background:
```jsx
import Aurora from './components/Aurora';

function HeroSection() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Aurora colorStops={["#ff6b6b", "#4ecdc4", "#45b7d1"]} amplitude={1.2} speed={0.8} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}
```

### Composing multiple components:
```jsx
<div className="hero-section">
  <Aurora colorStops={["#667eea", "#764ba2"]} />
  <FadeContent blur={true} duration={1200}>
    <Bounce delay={500}>
      <h1>Amazing Landing Page</h1>
    </Bounce>
    <AnimatedContent direction="vertical" delay={800}>
      <p>Subtitle text here</p>
      <ClickSpark sparkColor="#ffd700" sparkCount={20}>
        <StarBorder color="#00d4ff">
          <button>Get Started</button>
        </StarBorder>
      </ClickSpark>
    </AnimatedContent>
  </FadeContent>
</div>
```

## Guidelines for Claude

1. **Component Selection**: Match components to the user's intent. For hero sections, combine a Background component with Text Animations. For interactive elements, use Components like StarBorder, TiltCard, or ClickSpark.

2. **Installation Guidance**: When creating a project, include the appropriate install commands. Prefer the shadcn CLI method for quick setup. Always mention which peer dependencies are needed.

3. **Variants**: Ask the user (or infer from their project) whether they want JS or TS, and CSS or Tailwind. Default to TS-TW (TypeScript + Tailwind) unless the project indicates otherwise.

4. **For Artifacts (claude.ai rendered components)**: React Bits components are copy-paste components, not CDN-importable. In artifacts, recreate similar effects using available libraries (Framer Motion patterns with CSS, Three.js for 3D). For full React Bits usage, create file outputs instead.

5. **For File Outputs**: Install components via CLI or copy the source code into the project. Structure the project with components in a dedicated directory (e.g., `src/components/reactbits/`).

6. **Performance**: React Bits components are tree-shakeable and lightweight. Only include the components and their specific peer dependencies that are actually used.

7. **Customization**: All components are prop-driven. Encourage users to customize via props first, then modify the source code directly for deeper changes.

8. **Documentation Reference**: For detailed props and configuration, refer users to https://reactbits.dev/<category>/<component-name> (e.g., https://reactbits.dev/text-animations/split-text).
