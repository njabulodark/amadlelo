/**
 * NQOBILE PRIMARY SCHOOL - DESIGN SYSTEM
 * A refined, intentional color system built on grey, blue, and white.
 * Philosophy: Minimalist precision with purpose-driven choices.
 */

export const theme = {
    /**
     * PRIMARY PALETTE
     * Deep indigo (#4747d7) - Primary brand color
     * Used for: CTAs, primary actions, brand accents
     */
    colors: {
        // Brand Colors
        brand: {
            primary: '#4747d7',        // Vibrant indigo - main CTA, links
            primaryDark: '#3a3ac5',    // Hover state for primary
            primaryLight: '#eef0ff',   // Backgrounds, badges, subtle accents
        },

        // Neutral Greys
        neutral: {
            darkest: '#26262c',        // Headings, high-contrast text
            dark: '#76767f',           // Body text, secondary information
            medium: '#c5c5d2',         // Borders, dividers
            light: '#e0e0e0',          // Light borders
            lighter: '#f1f1f1',        // Scrollbar track
            lightest: '#f6f7fd',       // Page background (off-white with blue hint)
        },

        // Pure Colors
        pure: {
            white: '#ffffff',          // Cards, containers
            black: '#000000',
        },

        // Feedback Colors
        feedback: {
            success: '#22c55e',        // Green - success states
            error: '#ef4444',          // Red - errors
            warning: '#f59e0b',        // Amber - warnings
            info: '#3b82f6',           // Blue - informational
        },

        // Legacy/Additional
        text: '#76767f',
        lightbg: '#f6f7fd',
    },

    /**
     * TYPOGRAPHY SCALE
     * Inter font family for clarity and modern aesthetics
     */
    typography: {
        fontFamily: {
            primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            code: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
        },

        // Font Sizes (Tailwind-compatible)
        fontSize: {
            xs: '0.75rem',      // 12px
            sm: '0.875rem',     // 14px
            base: '1rem',       // 16px
            lg: '1.125rem',     // 18px
            xl: '1.25rem',      // 20px
            '2xl': '1.5rem',    // 24px
            '3xl': '1.875rem',  // 30px
            '4xl': '2.25rem',   // 36px
            '5xl': '3rem',      // 48px
        },

        // Font Weights
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },

        // Line Heights
        lineHeight: {
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
        },
    },

    /**
     * SPACING SCALE
     * Based on 4px baseline grid
     */
    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
        '4xl': '6rem',    // 96px
    },

    /**
     * BORDER RADIUS
     * Subtle, modern rounding
     */
    borderRadius: {
        sm: '0.25rem',    // 4px - subtle
        md: '0.5rem',     // 8px - default (--radius)
        lg: '0.75rem',    // 12px - cards
        xl: '1rem',       // 16px - prominent elements
        full: '9999px',   // Pills, badges
    },

    /**
     * SHADOWS
     * Elevation system for depth hierarchy
     */
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },

    /**
     * TRANSITIONS
     * Smooth, intentional micro-interactions
     */
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    /**
     * BREAKPOINTS
     * Mobile-first responsive design
     */
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },

    /**
     * DESIGN TOKENS
     * HSL values for CSS variable compatibility
     */
    tokens: {
        light: {
            background: '0 0% 100%',
            foreground: '0 0% 3.9%',
            primary: '0 0% 9%',
            primaryForeground: '0 0% 98%',
            secondary: '0 0% 96.1%',
            secondaryForeground: '0 0% 9%',
            muted: '0 0% 96.1%',
            mutedForeground: '0 0% 45.1%',
            accent: '0 0% 96.1%',
            accentForeground: '0 0% 9%',
            border: '0 0% 89.8%',
            input: '0 0% 89.8%',
            ring: '0 0% 3.9%',
        },
        dark: {
            background: '0 0% 3.9%',
            foreground: '0 0% 98%',
            primary: '0 0% 98%',
            primaryForeground: '0 0% 9%',
            secondary: '0 0% 14.9%',
            secondaryForeground: '0 0% 98%',
            muted: '0 0% 14.9%',
            mutedForeground: '0 0% 63.9%',
            accent: '0 0% 14.9%',
            accentForeground: '0 0% 98%',
            border: '0 0% 14.9%',
            input: '0 0% 14.9%',
            ring: '0 0% 83.1%',
        },
    },
} as const;

/**
 * USAGE GUIDELINES
 * 
 * Color Application:
 * - Primary (#4747d7): CTAs, links, important UI elements
 * - Neutral Darkest (#26262c): Headings, high-emphasis text
 * - Neutral Dark (#76767f): Body copy, labels
 * - Light Background (#f6f7fd): Page background for visual softness
 * - White (#ffffff): Cards, containers for contrast
 * 
 * Hierarchy:
 * 1. Use color sparingly - let whitespace breathe
 * 2. Primary color for actionable elements only
 * 3. Grey scale for information hierarchy
 * 4. White containers on light background for depth
 * 
 * Micro-interactions:
 * - Hover: Darken primary by ~10%
 * - Active: Scale down slightly (0.98)
 * - Focus: Ring with primary color
 * - Transitions: 300ms for most interactions
 */

export type Theme = typeof theme;
