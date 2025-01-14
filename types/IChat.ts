export interface IOption {
  id: string;
  text: string;
}

 export interface ISuggestion {
  id: string;
  title: string;
  duration: string;
  successRate: string;
}
export interface IChat {
  id: string;
  type: string;
  message: string;
  options?: IOption[];
  suggestions?:ISuggestion[],
  time:string
}
