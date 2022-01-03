import { AccountContextKeys } from '../../../../context/keys/AccountContextKeys';
import { ClientContextKeys } from '../../../../context/keys/ClientContextKeys';
import { UserContextKeys } from '../../../../context/keys/UserContextKeys';
import { TileExtension } from '../TileExtension';
import { TileExtensionType } from '../TileExtensionType';

export class HomeTileExtension extends TileExtension {
  /**
   * Type property defines what the type of intelligent tile and where it should be loaded.
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#type
   * @type {TileExtensionType}
   * @memberof HomeTileExtension
   */
  public type: TileExtensionType.HOME = TileExtensionType.HOME;

  /**
   * In this section, the application author defines a list of predefined context information that
   * home tile extension needs from Outreach to be sent during the initialization process.
   * It is a string array of predefined Outreach properties describing attributes of the Outreach user loading the addon.
   *
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/manifest.md#context
   * @see https://github.com/getoutreach/extensibility-sdk/blob/master/docs/context.md
   * @type {(UserContextKeys | ClientContextKeys | AccountContextKeys)[]}
   * @memberof HomeTileExtension
   */
  public context: (UserContextKeys | ClientContextKeys | AccountContextKeys)[];

  /**
   * Validates the home tile extension configuration
   *
   * @return {*}  {string[]}
   * @memberof HomeTileExtension
   */
  validate(): string[] {
    const issues = super.validate();

    this.context.forEach((context) => {
      if (
        !Object.values(UserContextKeys).includes(context as UserContextKeys) &&
        !Object.values(ClientContextKeys).includes(
          context as ClientContextKeys
        ) &&
        !Object.values(AccountContextKeys).includes(
          context as AccountContextKeys
        )
      ) {
        issues.push(
          'Context key is not one of the valid values for the home tile extension. Key: ' +
            context
        );
      }
    });

    return issues;
  }
}
