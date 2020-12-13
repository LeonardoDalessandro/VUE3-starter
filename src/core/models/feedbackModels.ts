/*
** STATUS => 0: success, 1: warning, 2:danger
*/

export interface FeedbackInterface {
  status: number;
  body: string;
}