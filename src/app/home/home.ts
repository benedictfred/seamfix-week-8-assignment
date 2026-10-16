import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Button } from '../reusable/button/button';
import { Card } from '../reusable/card/card';

export interface FrameworkCard {
  badgeLetter: string;
  badgeColor: 'teal' | 'orange';
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface EventCard {
  bannerText: string;
  bannerBgColor?: string;
  badgeText: string;
  badgeColor: 'teal' | 'orange';
  title: string;
  metaText: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface ResourceCard {
  badgeLetter: string;
  badgeColor: 'teal' | 'orange';
  title: string;
  description: string;
  buttonText: string;
  buttonType: 'white' | 'orange';
  linkUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private sanitizer = inject(DomSanitizer);

  videoId = signal<string>('dQw4w9WgXcQ');
  isVideoPlaying = signal<boolean>(false);

  safeVideoUrl = computed<SafeResourceUrl>(() => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId()}?autoplay=1&rel=0`,
    );
  });

  heroChecklist = signal<string[]>([
    '✓ Research development',
    '✓ Structured training',
    '✓ Mentorship & collaboration',
  ]);

  frameworkCards = signal<FrameworkCard[]>([
    {
      badgeLetter: 'P',
      badgeColor: 'teal',
      title: 'PUBLISH',
      description: 'Build the skills to communicate and publish meaningful research.',
      linkText: 'Explore resources →',
      linkUrl: 'resources',
    },
    {
      badgeLetter: 'R',
      badgeColor: 'orange',
      title: 'RESEARCH',
      description: 'Develop sound research knowledge, skills and practice.',
      linkText: 'Explore training →',
      linkUrl: 'programmes',
    },
    {
      badgeLetter: 'I',
      badgeColor: 'teal',
      title: 'IMPACT',
      description: 'Connect research with meaningful academic and societal outcomes.',
      linkText: 'Explore opportunities →',
      linkUrl: 'opportunities',
    },
    {
      badgeLetter: 'C',
      badgeColor: 'orange',
      title: 'COLLABORATE',
      description: 'Build connections, mentorship and cross-disciplinary partnerships.',
      linkText: 'Join community →',
      linkUrl: 'joinYra',
    },
  ]);

  upcomingEvents = signal<EventCard[]>([
    {
      bannerText: 'RESEARCH\nBOOTCAMP',
      bannerBgColor: '#61a3bc',
      badgeText: 'TRAINING',
      badgeColor: 'teal',
      title: 'YRA Global Research Bootcamp 2026',
      metaText: '20 Aug · Online · 4 Weeks',
      description: 'Intensive research training for emerging researchers and scholars.',
      linkText: 'Register now →',
      linkUrl: 'events',
    },
    {
      bannerText: 'SLR\nMASTERCLASS',
      bannerBgColor: '#f1a257',
      badgeText: 'SEMINAR',
      badgeColor: 'orange',
      title: 'How to Write a Systematic Literature Review',
      metaText: '30 Aug · Online · 1 Day',
      description: 'Practical session on systematic literature review and publication.',
      linkText: 'View details →',
      linkUrl: 'events',
    },
    {
      bannerText: 'DATA\nANALYSIS',
      bannerBgColor: '#61a3bc',
      badgeText: 'WORKSHOP',
      badgeColor: 'teal',
      title: 'Data Analysis with SPSS for Researchers',
      metaText: '10 Sep · Online · 2 Days',
      description: 'Hands-on training on data analysis and interpretation.',
      linkText: 'View details →',
      linkUrl: 'events',
    },
  ]);

  resourceCards = signal<ResourceCard[]>([
    {
      badgeLetter: 'F',
      badgeColor: 'teal',
      title: 'Free Resources',
      description: 'Explore guides, templates and learning materials.',
      buttonText: 'Browse free →',
      buttonType: 'white',
      linkUrl: 'resources',
    },
    {
      badgeLetter: 'P',
      badgeColor: 'orange',
      title: 'Premium Resources',
      description: 'Access premium guides, templates and research toolkits.',
      buttonText: 'Browse premium →',
      buttonType: 'orange',
      linkUrl: 'resources',
    },
  ]);

  lastHeroAction = signal<string>('');

  onExploreClick(): void {
    console.log('Explore YRA clicked from Hero');
    this.lastHeroAction.set('explore');
    const el = document.querySelector('.section-2');
    el?.scrollIntoView?.({ behavior: 'smooth' });
  }

  onUpcomingTrainingClick(): void {
    console.log('Upcoming Training clicked from Hero');
    this.lastHeroAction.set('upcoming-training');
    const el = document.querySelector('.section-3');
    el?.scrollIntoView?.({ behavior: 'smooth' });
  }

  onFrameworkCardClick(card: FrameworkCard): void {
    console.log('Framework card clicked:', card.title);
  }

  onEventCardClick(event: EventCard): void {
    console.log('Event card clicked:', event.title);
  }

  onResourceCardClick(resource: ResourceCard): void {
    console.log('Resource card clicked:', resource.title);
  }

  playVideo(): void {
    console.log('Playing YRA media video');
    this.isVideoPlaying.set(true);
  }

  onViewMediaLibraryClick(): void {
    console.log('View media library clicked');
    this.lastHeroAction.set('media-library');
    if (typeof window !== 'undefined') {
      window.open('https://www.youtube.com/@youngresearcheracademy', '_blank');
    }
  }
}
