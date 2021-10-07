import { ConfigurationItem } from '../configuration/ConfigurationItem';
import { ManifestApi } from '../manifest/ManifestApi';
import { LocalizedString } from '../manifest/store/LocalizedString';
import { ManifestMedia } from '../manifest/store/Media';
import { ManifestHostEnvironment } from './ManifestHostEnvironment';

export interface ManifestV1 {
  version: string;
  identifier: string;
  store: 'personal' | 'private' | 'public';
  title: LocalizedString;
  description: LocalizedString;
  host: {
    type: 'tab-opportunity' | 'tab-prospect' | 'tab-account' | 'left-side-menu';
    url: string;
    icon: string;
    environment: ManifestHostEnvironment;
    notificationsUrl?: string;
  };
  author: {
    company?: string;
    websiteUrl: string;
    privacyUrl: string;
    termsOfUseUrl: string;
  };
  categories?: string[];

  context: string[];

  api?: ManifestApi;

  configuration: ConfigurationItem[];

  medias?: ManifestMedia[];
}
