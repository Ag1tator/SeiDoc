export type loginDataType = {
  email: string;
  password: string;
};

export type adminLoginType = {
  cities: string;
  department: string;
  email: string;
  password: string;
}

export type locationDataType = {
  prefecture: string;
  city: string;
  municipality: string;
};

export type birthdayDataType = {
  year: string;
  month: string;
  date: string;
};

export type sexDataType = {
  sex: 'male' | 'female' | 'None';
}

export type logType = {
  createdAt: number;
  documentID: string;
  system: System;
  user: UserState;
};

export type searchLogType = {
  createdAt: number;
  searchWord: string;
  user: UserState;
  userID: string
}

export type rankingType = {
  documentID: string;
  system: System;
  count: number;
  ageGroup: ageGroup[];
};

export type detailPageLogData = {
  documentID: string;
  system: System;
  user: UserState;
  createdAt: number;
};

export type UserState = {
  userId: string;
  nickName: string;
  birthday: string;
  income: string;
  address: string;
  family: string;
  isAdmin: boolean; //
  city: string;
  department: string;
  sex: 'male' | 'female' | 'None';
  searchedWords: string[];
  viewedCategory: [{ categoryName: string, count: number }]
};



export type DetailState = {
  detail: System;
};

export type System = {
  Name: string;
  Department: string;
  Location: string;
  Site: string;
  Detail: string;
  Target: string;
  Method: Array<string>;
  Category: Array<string>;
  CreatedAt: number;
  UpdatedAt: number;
  isDeleted: boolean;
  ExpireAt: number;
  documentID: string;
  totalView: number;
  weeklyView: number[];
  monthlyView: number;
  dailyView: number;
  ageGroup: ageGroup[];
};
export type ageGroup = {
  count: number;
  age: '0' | '10' | '20' | '30' | '40' | '50' | '60' | '70'
}

export type SystemsState = {
  systems: Array<System>;
  loading: boolean;
};

export type TagState = {
  tag: string;
};

export type systemData = {
  id: string,
  data: System,
  willDelete: boolean,
  isNewCreate: boolean // True if it is a new system
};

export type showOrderType = {
  order: Array<string>
};

export type awsRekognition = {
  AgeRange: {
    High: number
    Low: number
  },
  BoundingBox: {
    Height: number
    Left: number
    Top: number
    Width: number
  }
}

export type awsResData = {
  AgeRange: { Low: number, High: number }
  Beard: { Value: boolean, Confidence: number }
  BoundingBox: { Width: number, Height: number, Left: number, Top: number }
  Confidence: number
  Emotions: Array<{ Type: string, Confidence: number }>
  Eyeglasses: { Value: boolean, Confidence: number }
  EyesOpen: { Value: boolean, Confidence: number }
  Gender: { Value: string, Confidence: number }
  Landmarks: Array<{ Type: string, X: number, Y: number }>
  MouthOpen: { Value: boolean, Confidence: number }
  Mustache: { Value: false, Confidence: number }
  Pose: { Roll: number, Yaw: number, Pitch: number }
  Quality: { Brightness: number, Sharpness: number }
  Smile: { Value: boolean, Confidence: number }
  Sunglasses: { Value: boolean, Confidence: number }
}

export type sendData = {
  Name: string
  Location: string
  Department: string
  Target: string
  Site: string
  Detail: string
  Method: Array<string>
  Category: Array<string>
};

/* もしものために残しておく*/
export type machineLearningType = {
  age: {
    min: number,
    max: number,
    score: number
  },
  face_location: {
    height: number,
    left: number,
    top: number,
    width: number
  },
  gender: {
    gender: string,
    gender_label: string,
    score: number
  }
}

export type userProfile = {
  age: string,
  gender: string
}
