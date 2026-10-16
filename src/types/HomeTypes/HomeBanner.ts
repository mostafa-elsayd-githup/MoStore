export interface HomeBannerProp {
  desktopimg: string;
  mobileimg: string;
  title: string;
  subtitle: string;
  buttontext?: string;
  buttonlink?: string;
  PageTitle: string;
}
export interface SportSectionProp {
  image: string;
  SetionName: string;
  pathLink: string;
  PageTitle: string;
}
export interface sport {
  sportList: [];
  sportSectionHeader: string[];
}
export interface ButtonType {
  btnlink?: string;
  btntext?: string;
  coloe?: string;
  z_index?: string;
  textColor?: string;
  title?: string;
}
