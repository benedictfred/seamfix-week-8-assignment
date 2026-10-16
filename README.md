# Seamfix NextGen Week 8 Assignment

This project implements the Young Researcher Academy (YRA) web application with a focus on Angular component communication patterns, reusable UI components, and signal-based state flow.

## Architecture and Requirements

The application adheres to the following component communication specifications:

1. **Decorator-based Button Communication**:
   - The reusable `Button` component communicates strictly using `@Input()` and `@Output()` decorators alongside `EventEmitter`.
   - Supports configurable button text, types (`white` outline and `orange` solid primary), disabled states, and click event propagation.

2. **Signal-based Component Communication**:
   - Modern Angular `input()` and `output()` signals manage data flow across components such as `Card`.
   - Application state in parent components (such as `Home`) is powered by `signal()` and `computed()` primitives.

3. **Reusable Card Component**:
   - The single `Card` component is reused across multiple sections:
     - Framework pathway cards (Publish, Research, Impact, Collaborate) with letter badges and links.
     - Upcoming event cards with colored banners, category tags, meta schedules, and action links.
     - Resource centre cards (Free and Premium) embedding the reusable `Button` component.

4. **Interactive Media Section**:
   - Video player featuring a custom styled cover state with a play button matching the design, and interactive YouTube iframe streaming powered by Angular's `DomSanitizer`.

## Implemented Sections

- **Upper Navigation**: Contact information, motto, address, and login/register actions.
- **Main Navigation**: Brand logo mark, primary navigation links, mobile menu toggle, and call-to-action buttons.
- **Hero Section**: Headline display typography, description, action buttons, value propositions checklist, and community badge card.
- **The YRA Framework**: Four connected research pathways displayed as cards in a responsive grid.
- **Upcoming Events**: Event schedule cards with custom banners, duration pills, and registration links.
- **YRA Resource Centre**: Highlight banner containing free and premium resource pathway cards.
- **YRA Media**: Video player for past recordings with an active YouTube player integration and link to the media library.
- **Footer**: Brand links, programmes, resources, community channels, and copyright statement.
