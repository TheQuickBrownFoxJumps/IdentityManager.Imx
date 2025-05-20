import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { PermissionInfo } from 'imx-api-qbm';
import { ISessionState } from '../session/session-state';

@Injectable({ providedIn: 'root' })
export class SessionGroupsService {
  private permissionGroups: PermissionInfo[] = [];

  constructor(private readonly authentication: AuthenticationService) {
    this.authentication.onSessionResponse.subscribe((sessionState: ISessionState) => {
      this.permissionGroups = (sessionState as any)?.PermissionGroups ?? [];
    });
  }

  public getPermissionGroups(): PermissionInfo[] {
    return this.permissionGroups;
  }
}