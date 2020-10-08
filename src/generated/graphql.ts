import * as Apollo from '@apollo/client';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

export type Bond = {
  __typename?: 'Bond';
  id: Scalars['ID'];
  status: BondStatus;
  referenceID: Scalars['BigInt'];
  bondedAmount: Scalars['BigDecimal'];
  operator: Operator;
  holder: Scalars['Bytes'];
  keep: BondedEcdsaKeep;
};

export enum BondStatus {
  Active = 'ACTIVE',
  Released = 'RELEASED',
  Seized = 'SEIZED'
}

export type Bond_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  status?: Maybe<BondStatus>;
  status_not?: Maybe<BondStatus>;
  referenceID?: Maybe<Scalars['BigInt']>;
  referenceID_not?: Maybe<Scalars['BigInt']>;
  referenceID_gt?: Maybe<Scalars['BigInt']>;
  referenceID_lt?: Maybe<Scalars['BigInt']>;
  referenceID_gte?: Maybe<Scalars['BigInt']>;
  referenceID_lte?: Maybe<Scalars['BigInt']>;
  referenceID_in?: Maybe<Array<Scalars['BigInt']>>;
  referenceID_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bondedAmount?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_not?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  bondedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  bondedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  holder?: Maybe<Scalars['Bytes']>;
  holder_not?: Maybe<Scalars['Bytes']>;
  holder_in?: Maybe<Array<Scalars['Bytes']>>;
  holder_not_in?: Maybe<Array<Scalars['Bytes']>>;
  holder_contains?: Maybe<Scalars['Bytes']>;
  holder_not_contains?: Maybe<Scalars['Bytes']>;
  keep?: Maybe<Scalars['String']>;
  keep_not?: Maybe<Scalars['String']>;
  keep_gt?: Maybe<Scalars['String']>;
  keep_lt?: Maybe<Scalars['String']>;
  keep_gte?: Maybe<Scalars['String']>;
  keep_lte?: Maybe<Scalars['String']>;
  keep_in?: Maybe<Array<Scalars['String']>>;
  keep_not_in?: Maybe<Array<Scalars['String']>>;
  keep_contains?: Maybe<Scalars['String']>;
  keep_not_contains?: Maybe<Scalars['String']>;
  keep_starts_with?: Maybe<Scalars['String']>;
  keep_not_starts_with?: Maybe<Scalars['String']>;
  keep_ends_with?: Maybe<Scalars['String']>;
  keep_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Bond_OrderBy {
  Id = 'id',
  Status = 'status',
  ReferenceId = 'referenceID',
  BondedAmount = 'bondedAmount',
  Operator = 'operator',
  Holder = 'holder',
  Keep = 'keep'
}

export type BondedEcdsaKeep = {
  __typename?: 'BondedECDSAKeep';
  id: Scalars['ID'];
  createdAt: Scalars['BigInt'];
  keepAddress: Scalars['Bytes'];
  deposit: Deposit;
  totalBondAmount?: Maybe<Scalars['BigInt']>;
  publicKey?: Maybe<Scalars['Bytes']>;
  status?: Maybe<BondedEcdsaKeepStatus>;
  honestThreshold?: Maybe<Scalars['Int']>;
  members: Array<Maybe<Operator>>;
  /** The nodes which have submitted their pubkey. */
  pubkeySubmissions: Array<Maybe<Operator>>;
};


export type BondedEcdsaKeepMembersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
};


export type BondedEcdsaKeepPubkeySubmissionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
};

export enum BondedEcdsaKeepStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Terminated = 'TERMINATED'
}

export type BondedEcdsaKeep_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  keepAddress?: Maybe<Scalars['Bytes']>;
  keepAddress_not?: Maybe<Scalars['Bytes']>;
  keepAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_contains?: Maybe<Scalars['Bytes']>;
  keepAddress_not_contains?: Maybe<Scalars['Bytes']>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  totalBondAmount?: Maybe<Scalars['BigInt']>;
  totalBondAmount_not?: Maybe<Scalars['BigInt']>;
  totalBondAmount_gt?: Maybe<Scalars['BigInt']>;
  totalBondAmount_lt?: Maybe<Scalars['BigInt']>;
  totalBondAmount_gte?: Maybe<Scalars['BigInt']>;
  totalBondAmount_lte?: Maybe<Scalars['BigInt']>;
  totalBondAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBondAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  publicKey?: Maybe<Scalars['Bytes']>;
  publicKey_not?: Maybe<Scalars['Bytes']>;
  publicKey_in?: Maybe<Array<Scalars['Bytes']>>;
  publicKey_not_in?: Maybe<Array<Scalars['Bytes']>>;
  publicKey_contains?: Maybe<Scalars['Bytes']>;
  publicKey_not_contains?: Maybe<Scalars['Bytes']>;
  status?: Maybe<BondedEcdsaKeepStatus>;
  status_not?: Maybe<BondedEcdsaKeepStatus>;
  honestThreshold?: Maybe<Scalars['Int']>;
  honestThreshold_not?: Maybe<Scalars['Int']>;
  honestThreshold_gt?: Maybe<Scalars['Int']>;
  honestThreshold_lt?: Maybe<Scalars['Int']>;
  honestThreshold_gte?: Maybe<Scalars['Int']>;
  honestThreshold_lte?: Maybe<Scalars['Int']>;
  honestThreshold_in?: Maybe<Array<Scalars['Int']>>;
  honestThreshold_not_in?: Maybe<Array<Scalars['Int']>>;
  members?: Maybe<Array<Scalars['String']>>;
  members_not?: Maybe<Array<Scalars['String']>>;
  members_contains?: Maybe<Array<Scalars['String']>>;
  members_not_contains?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions_not?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions_contains?: Maybe<Array<Scalars['String']>>;
  pubkeySubmissions_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum BondedEcdsaKeep_OrderBy {
  Id = 'id',
  CreatedAt = 'createdAt',
  KeepAddress = 'keepAddress',
  Deposit = 'deposit',
  TotalBondAmount = 'totalBondAmount',
  PublicKey = 'publicKey',
  Status = 'status',
  HonestThreshold = 'honestThreshold',
  Members = 'members',
  PubkeySubmissions = 'pubkeySubmissions'
}


export type CourtesyCalledEvent = Event & {
  __typename?: 'CourtesyCalledEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
};

export type CourtesyCalledEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CourtesyCalledEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit'
}

export type CreatedEvent = Event & {
  __typename?: 'CreatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
};

export type CreatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CreatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit'
}

export type Deposit = {
  __typename?: 'Deposit';
  id: Scalars['ID'];
  tbtcSystem: Scalars['Bytes'];
  contractAddress: Scalars['Bytes'];
  tdtToken: TbtcDepositToken;
  currentState?: Maybe<DepositState>;
  createdAt?: Maybe<Scalars['BigInt']>;
  updatedAt?: Maybe<Scalars['BigInt']>;
  owner: Scalars['Bytes'];
  /** The address which created the deposit initially. In contrast to the owner, this cannot change. */
  creator: Scalars['Bytes'];
  keepAddress?: Maybe<Scalars['Bytes']>;
  lotSizeSatoshis?: Maybe<Scalars['BigInt']>;
  initialCollateralizedPercent?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  signerFee?: Maybe<Scalars['BigInt']>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  endOfTerm?: Maybe<Scalars['BigInt']>;
  bondedECDSAKeep?: Maybe<BondedEcdsaKeep>;
  depositLiquidation?: Maybe<DepositLiquidation>;
  depositRedemption?: Maybe<DepositRedemption>;
  depositSetup?: Maybe<DepositSetup>;
  filter_liquidationLikeState: Scalars['Boolean'];
  filter_activeLikeState: Scalars['Boolean'];
  filter_unmintedTDT: Scalars['Boolean'];
  filter_redeemableAsOf: Scalars['BigInt'];
};

export type DepositLiquidation = {
  __typename?: 'DepositLiquidation';
  id: Scalars['ID'];
  deposit: Deposit;
  initiateTxhash?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash?: Maybe<Scalars['Bytes']>;
  liquidationInitiated?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated?: Maybe<Scalars['BigInt']>;
  isLiquidated: Scalars['Boolean'];
  liquidatedAt?: Maybe<Scalars['BigInt']>;
  liquidationInitiator?: Maybe<Scalars['Bytes']>;
  cause?: Maybe<LiquidationCause>;
};

export type DepositLiquidation_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  initiateTxhash?: Maybe<Scalars['Bytes']>;
  initiateTxhash_not?: Maybe<Scalars['Bytes']>;
  initiateTxhash_in?: Maybe<Array<Scalars['Bytes']>>;
  initiateTxhash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  initiateTxhash_contains?: Maybe<Scalars['Bytes']>;
  initiateTxhash_not_contains?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash_not?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash_in?: Maybe<Array<Scalars['Bytes']>>;
  courtesyCallTxhash_not_in?: Maybe<Array<Scalars['Bytes']>>;
  courtesyCallTxhash_contains?: Maybe<Scalars['Bytes']>;
  courtesyCallTxhash_not_contains?: Maybe<Scalars['Bytes']>;
  liquidationInitiated?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_not?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_gt?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_lt?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_gte?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_lte?: Maybe<Scalars['BigInt']>;
  liquidationInitiated_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidationInitiated_not_in?: Maybe<Array<Scalars['BigInt']>>;
  courtesyCallInitiated?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated_not?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated_gt?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated_lt?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated_gte?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated_lte?: Maybe<Scalars['BigInt']>;
  courtesyCallInitiated_in?: Maybe<Array<Scalars['BigInt']>>;
  courtesyCallInitiated_not_in?: Maybe<Array<Scalars['BigInt']>>;
  isLiquidated?: Maybe<Scalars['Boolean']>;
  isLiquidated_not?: Maybe<Scalars['Boolean']>;
  isLiquidated_in?: Maybe<Array<Scalars['Boolean']>>;
  isLiquidated_not_in?: Maybe<Array<Scalars['Boolean']>>;
  liquidatedAt?: Maybe<Scalars['BigInt']>;
  liquidatedAt_not?: Maybe<Scalars['BigInt']>;
  liquidatedAt_gt?: Maybe<Scalars['BigInt']>;
  liquidatedAt_lt?: Maybe<Scalars['BigInt']>;
  liquidatedAt_gte?: Maybe<Scalars['BigInt']>;
  liquidatedAt_lte?: Maybe<Scalars['BigInt']>;
  liquidatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidationInitiator?: Maybe<Scalars['Bytes']>;
  liquidationInitiator_not?: Maybe<Scalars['Bytes']>;
  liquidationInitiator_in?: Maybe<Array<Scalars['Bytes']>>;
  liquidationInitiator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  liquidationInitiator_contains?: Maybe<Scalars['Bytes']>;
  liquidationInitiator_not_contains?: Maybe<Scalars['Bytes']>;
  cause?: Maybe<LiquidationCause>;
  cause_not?: Maybe<LiquidationCause>;
};

export enum DepositLiquidation_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  InitiateTxhash = 'initiateTxhash',
  CourtesyCallTxhash = 'courtesyCallTxhash',
  LiquidationInitiated = 'liquidationInitiated',
  CourtesyCallInitiated = 'courtesyCallInitiated',
  IsLiquidated = 'isLiquidated',
  LiquidatedAt = 'liquidatedAt',
  LiquidationInitiator = 'liquidationInitiator',
  Cause = 'cause'
}

export type DepositRedemption = {
  __typename?: 'DepositRedemption';
  id: Scalars['ID'];
  deposit: Deposit;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt?: Maybe<Scalars['BigInt']>;
  redeemedAt?: Maybe<Scalars['BigInt']>;
  lastRequestedDigest?: Maybe<Scalars['Bytes']>;
  outpoint?: Maybe<Scalars['Bytes']>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  txid?: Maybe<Scalars['Bytes']>;
};

export type DepositRedemption_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_contains?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not_contains?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  requestedFee_not?: Maybe<Scalars['BigInt']>;
  requestedFee_gt?: Maybe<Scalars['BigInt']>;
  requestedFee_lt?: Maybe<Scalars['BigInt']>;
  requestedFee_gte?: Maybe<Scalars['BigInt']>;
  requestedFee_lte?: Maybe<Scalars['BigInt']>;
  requestedFee_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  latestRedemptionFee?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_not?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_gt?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_lt?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_gte?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_lte?: Maybe<Scalars['BigInt']>;
  latestRedemptionFee_in?: Maybe<Array<Scalars['BigInt']>>;
  latestRedemptionFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawalRequestAt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_not?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_gt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_lt?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_gte?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_lte?: Maybe<Scalars['BigInt']>;
  withdrawalRequestAt_in?: Maybe<Array<Scalars['BigInt']>>;
  withdrawalRequestAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  redeemedAt?: Maybe<Scalars['BigInt']>;
  redeemedAt_not?: Maybe<Scalars['BigInt']>;
  redeemedAt_gt?: Maybe<Scalars['BigInt']>;
  redeemedAt_lt?: Maybe<Scalars['BigInt']>;
  redeemedAt_gte?: Maybe<Scalars['BigInt']>;
  redeemedAt_lte?: Maybe<Scalars['BigInt']>;
  redeemedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  redeemedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  lastRequestedDigest?: Maybe<Scalars['Bytes']>;
  lastRequestedDigest_not?: Maybe<Scalars['Bytes']>;
  lastRequestedDigest_in?: Maybe<Array<Scalars['Bytes']>>;
  lastRequestedDigest_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lastRequestedDigest_contains?: Maybe<Scalars['Bytes']>;
  lastRequestedDigest_not_contains?: Maybe<Scalars['Bytes']>;
  outpoint?: Maybe<Scalars['Bytes']>;
  outpoint_not?: Maybe<Scalars['Bytes']>;
  outpoint_in?: Maybe<Array<Scalars['Bytes']>>;
  outpoint_not_in?: Maybe<Array<Scalars['Bytes']>>;
  outpoint_contains?: Maybe<Scalars['Bytes']>;
  outpoint_not_contains?: Maybe<Scalars['Bytes']>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  utxoSize_not?: Maybe<Scalars['BigInt']>;
  utxoSize_gt?: Maybe<Scalars['BigInt']>;
  utxoSize_lt?: Maybe<Scalars['BigInt']>;
  utxoSize_gte?: Maybe<Scalars['BigInt']>;
  utxoSize_lte?: Maybe<Scalars['BigInt']>;
  utxoSize_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoSize_not_in?: Maybe<Array<Scalars['BigInt']>>;
  txid?: Maybe<Scalars['Bytes']>;
  txid_not?: Maybe<Scalars['Bytes']>;
  txid_in?: Maybe<Array<Scalars['Bytes']>>;
  txid_not_in?: Maybe<Array<Scalars['Bytes']>>;
  txid_contains?: Maybe<Scalars['Bytes']>;
  txid_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum DepositRedemption_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  RedeemerOutputScript = 'redeemerOutputScript',
  RequestedFee = 'requestedFee',
  LatestRedemptionFee = 'latestRedemptionFee',
  WithdrawalRequestAt = 'withdrawalRequestAt',
  RedeemedAt = 'redeemedAt',
  LastRequestedDigest = 'lastRequestedDigest',
  Outpoint = 'outpoint',
  UtxoSize = 'utxoSize',
  Txid = 'txid'
}

export type DepositSetup = {
  __typename?: 'DepositSetup';
  id: Scalars['ID'];
  deposit: Deposit;
  failureReason?: Maybe<SetupFailedReason>;
  fundingProofTimerStartedAt?: Maybe<Scalars['BigInt']>;
};

export type DepositSetup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  failureReason?: Maybe<SetupFailedReason>;
  failureReason_not?: Maybe<SetupFailedReason>;
  fundingProofTimerStartedAt?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_not?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_gt?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_lt?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_gte?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_lte?: Maybe<Scalars['BigInt']>;
  fundingProofTimerStartedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  fundingProofTimerStartedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum DepositSetup_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  FailureReason = 'failureReason',
  FundingProofTimerStartedAt = 'fundingProofTimerStartedAt'
}

export enum DepositState {
  Start = 'START',
  AwaitingSignerSetup = 'AWAITING_SIGNER_SETUP',
  AwaitingBtcFundingProof = 'AWAITING_BTC_FUNDING_PROOF',
  FailedSetup = 'FAILED_SETUP',
  Active = 'ACTIVE',
  AwaitingWithdrawalSignature = 'AWAITING_WITHDRAWAL_SIGNATURE',
  AwaitingWithdrawalProof = 'AWAITING_WITHDRAWAL_PROOF',
  Redeemed = 'REDEEMED',
  CourtesyCall = 'COURTESY_CALL',
  FraudLiquidationInProgress = 'FRAUD_LIQUIDATION_IN_PROGRESS',
  LiquidationInProgress = 'LIQUIDATION_IN_PROGRESS',
  Liquidated = 'LIQUIDATED'
}

export type Deposit_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  tbtcSystem?: Maybe<Scalars['Bytes']>;
  tbtcSystem_not?: Maybe<Scalars['Bytes']>;
  tbtcSystem_in?: Maybe<Array<Scalars['Bytes']>>;
  tbtcSystem_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tbtcSystem_contains?: Maybe<Scalars['Bytes']>;
  tbtcSystem_not_contains?: Maybe<Scalars['Bytes']>;
  contractAddress?: Maybe<Scalars['Bytes']>;
  contractAddress_not?: Maybe<Scalars['Bytes']>;
  contractAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  contractAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  contractAddress_contains?: Maybe<Scalars['Bytes']>;
  contractAddress_not_contains?: Maybe<Scalars['Bytes']>;
  tdtToken?: Maybe<Scalars['String']>;
  tdtToken_not?: Maybe<Scalars['String']>;
  tdtToken_gt?: Maybe<Scalars['String']>;
  tdtToken_lt?: Maybe<Scalars['String']>;
  tdtToken_gte?: Maybe<Scalars['String']>;
  tdtToken_lte?: Maybe<Scalars['String']>;
  tdtToken_in?: Maybe<Array<Scalars['String']>>;
  tdtToken_not_in?: Maybe<Array<Scalars['String']>>;
  tdtToken_contains?: Maybe<Scalars['String']>;
  tdtToken_not_contains?: Maybe<Scalars['String']>;
  tdtToken_starts_with?: Maybe<Scalars['String']>;
  tdtToken_not_starts_with?: Maybe<Scalars['String']>;
  tdtToken_ends_with?: Maybe<Scalars['String']>;
  tdtToken_not_ends_with?: Maybe<Scalars['String']>;
  currentState?: Maybe<DepositState>;
  currentState_not?: Maybe<DepositState>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAt?: Maybe<Scalars['BigInt']>;
  updatedAt_not?: Maybe<Scalars['BigInt']>;
  updatedAt_gt?: Maybe<Scalars['BigInt']>;
  updatedAt_lt?: Maybe<Scalars['BigInt']>;
  updatedAt_gte?: Maybe<Scalars['BigInt']>;
  updatedAt_lte?: Maybe<Scalars['BigInt']>;
  updatedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  creator?: Maybe<Scalars['Bytes']>;
  creator_not?: Maybe<Scalars['Bytes']>;
  creator_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_contains?: Maybe<Scalars['Bytes']>;
  creator_not_contains?: Maybe<Scalars['Bytes']>;
  keepAddress?: Maybe<Scalars['Bytes']>;
  keepAddress_not?: Maybe<Scalars['Bytes']>;
  keepAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  keepAddress_contains?: Maybe<Scalars['Bytes']>;
  keepAddress_not_contains?: Maybe<Scalars['Bytes']>;
  lotSizeSatoshis?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_not?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_gt?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_lt?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_gte?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_lte?: Maybe<Scalars['BigInt']>;
  lotSizeSatoshis_in?: Maybe<Array<Scalars['BigInt']>>;
  lotSizeSatoshis_not_in?: Maybe<Array<Scalars['BigInt']>>;
  initialCollateralizedPercent?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  initialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  signerFee?: Maybe<Scalars['BigInt']>;
  signerFee_not?: Maybe<Scalars['BigInt']>;
  signerFee_gt?: Maybe<Scalars['BigInt']>;
  signerFee_lt?: Maybe<Scalars['BigInt']>;
  signerFee_gte?: Maybe<Scalars['BigInt']>;
  signerFee_lte?: Maybe<Scalars['BigInt']>;
  signerFee_in?: Maybe<Array<Scalars['BigInt']>>;
  signerFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoSize?: Maybe<Scalars['BigInt']>;
  utxoSize_not?: Maybe<Scalars['BigInt']>;
  utxoSize_gt?: Maybe<Scalars['BigInt']>;
  utxoSize_lt?: Maybe<Scalars['BigInt']>;
  utxoSize_gte?: Maybe<Scalars['BigInt']>;
  utxoSize_lte?: Maybe<Scalars['BigInt']>;
  utxoSize_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoSize_not_in?: Maybe<Array<Scalars['BigInt']>>;
  endOfTerm?: Maybe<Scalars['BigInt']>;
  endOfTerm_not?: Maybe<Scalars['BigInt']>;
  endOfTerm_gt?: Maybe<Scalars['BigInt']>;
  endOfTerm_lt?: Maybe<Scalars['BigInt']>;
  endOfTerm_gte?: Maybe<Scalars['BigInt']>;
  endOfTerm_lte?: Maybe<Scalars['BigInt']>;
  endOfTerm_in?: Maybe<Array<Scalars['BigInt']>>;
  endOfTerm_not_in?: Maybe<Array<Scalars['BigInt']>>;
  bondedECDSAKeep?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not?: Maybe<Scalars['String']>;
  bondedECDSAKeep_gt?: Maybe<Scalars['String']>;
  bondedECDSAKeep_lt?: Maybe<Scalars['String']>;
  bondedECDSAKeep_gte?: Maybe<Scalars['String']>;
  bondedECDSAKeep_lte?: Maybe<Scalars['String']>;
  bondedECDSAKeep_in?: Maybe<Array<Scalars['String']>>;
  bondedECDSAKeep_not_in?: Maybe<Array<Scalars['String']>>;
  bondedECDSAKeep_contains?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not_contains?: Maybe<Scalars['String']>;
  bondedECDSAKeep_starts_with?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not_starts_with?: Maybe<Scalars['String']>;
  bondedECDSAKeep_ends_with?: Maybe<Scalars['String']>;
  bondedECDSAKeep_not_ends_with?: Maybe<Scalars['String']>;
  depositLiquidation?: Maybe<Scalars['String']>;
  depositLiquidation_not?: Maybe<Scalars['String']>;
  depositLiquidation_gt?: Maybe<Scalars['String']>;
  depositLiquidation_lt?: Maybe<Scalars['String']>;
  depositLiquidation_gte?: Maybe<Scalars['String']>;
  depositLiquidation_lte?: Maybe<Scalars['String']>;
  depositLiquidation_in?: Maybe<Array<Scalars['String']>>;
  depositLiquidation_not_in?: Maybe<Array<Scalars['String']>>;
  depositLiquidation_contains?: Maybe<Scalars['String']>;
  depositLiquidation_not_contains?: Maybe<Scalars['String']>;
  depositLiquidation_starts_with?: Maybe<Scalars['String']>;
  depositLiquidation_not_starts_with?: Maybe<Scalars['String']>;
  depositLiquidation_ends_with?: Maybe<Scalars['String']>;
  depositLiquidation_not_ends_with?: Maybe<Scalars['String']>;
  depositRedemption?: Maybe<Scalars['String']>;
  depositRedemption_not?: Maybe<Scalars['String']>;
  depositRedemption_gt?: Maybe<Scalars['String']>;
  depositRedemption_lt?: Maybe<Scalars['String']>;
  depositRedemption_gte?: Maybe<Scalars['String']>;
  depositRedemption_lte?: Maybe<Scalars['String']>;
  depositRedemption_in?: Maybe<Array<Scalars['String']>>;
  depositRedemption_not_in?: Maybe<Array<Scalars['String']>>;
  depositRedemption_contains?: Maybe<Scalars['String']>;
  depositRedemption_not_contains?: Maybe<Scalars['String']>;
  depositRedemption_starts_with?: Maybe<Scalars['String']>;
  depositRedemption_not_starts_with?: Maybe<Scalars['String']>;
  depositRedemption_ends_with?: Maybe<Scalars['String']>;
  depositRedemption_not_ends_with?: Maybe<Scalars['String']>;
  filter_liquidationLikeState?: Maybe<Scalars['Boolean']>;
  filter_liquidationLikeState_not?: Maybe<Scalars['Boolean']>;
  filter_liquidationLikeState_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_liquidationLikeState_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_activeLikeState?: Maybe<Scalars['Boolean']>;
  filter_activeLikeState_not?: Maybe<Scalars['Boolean']>;
  filter_activeLikeState_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_activeLikeState_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_unmintedTDT?: Maybe<Scalars['Boolean']>;
  filter_unmintedTDT_not?: Maybe<Scalars['Boolean']>;
  filter_unmintedTDT_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_unmintedTDT_not_in?: Maybe<Array<Scalars['Boolean']>>;
  filter_redeemableAsOf?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_not?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_gt?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_lt?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_gte?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_lte?: Maybe<Scalars['BigInt']>;
  filter_redeemableAsOf_in?: Maybe<Array<Scalars['BigInt']>>;
  filter_redeemableAsOf_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Deposit_OrderBy {
  Id = 'id',
  TbtcSystem = 'tbtcSystem',
  ContractAddress = 'contractAddress',
  TdtToken = 'tdtToken',
  CurrentState = 'currentState',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Owner = 'owner',
  Creator = 'creator',
  KeepAddress = 'keepAddress',
  LotSizeSatoshis = 'lotSizeSatoshis',
  InitialCollateralizedPercent = 'initialCollateralizedPercent',
  UndercollateralizedThresholdPercent = 'undercollateralizedThresholdPercent',
  SeverelyUndercollateralizedThresholdPercent = 'severelyUndercollateralizedThresholdPercent',
  SignerFee = 'signerFee',
  UtxoSize = 'utxoSize',
  EndOfTerm = 'endOfTerm',
  BondedEcdsaKeep = 'bondedECDSAKeep',
  DepositLiquidation = 'depositLiquidation',
  DepositRedemption = 'depositRedemption',
  DepositSetup = 'depositSetup',
  FilterLiquidationLikeState = 'filter_liquidationLikeState',
  FilterActiveLikeState = 'filter_activeLikeState',
  FilterUnmintedTdt = 'filter_unmintedTDT',
  FilterRedeemableAsOf = 'filter_redeemableAsOf'
}

export type Event = {
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
};

export type Event_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Event_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit'
}

export type FundedEvent = Event & {
  __typename?: 'FundedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  tx: Scalars['Bytes'];
};

export type FundedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum FundedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Tx = 'tx'
}

export type GotRedemptionSignatureEvent = Event & {
  __typename?: 'GotRedemptionSignatureEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
};

export type GotRedemptionSignatureEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GotRedemptionSignatureEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit'
}

export type Governance = {
  __typename?: 'Governance';
  id: Scalars['ID'];
  newDepositsAllowed: Scalars['Boolean'];
  signerFeeDivisor: Scalars['Int'];
  pendingSignerFeeDivisorChange?: Maybe<GovernanceChange>;
  lotSizes: Array<Scalars['BigInt']>;
  pendingLotSizeChange?: Maybe<GovernanceChange>;
  factorySelector: Scalars['Bytes'];
  fullyBackedFactory: Scalars['Bytes'];
  keepStakedFactory: Scalars['Bytes'];
  pendingFactoriesChange?: Maybe<GovernanceChange>;
  priceFeeds: Array<Scalars['Bytes']>;
  pendingPriceFeedAddition?: Maybe<GovernanceChange>;
  initialCollateralizedPercent: Scalars['Int'];
  severelyUndercollateralizedThresholdPercent: Scalars['Int'];
  undercollateralizedThresholdPercent: Scalars['Int'];
  pendingCollateralizationThresholdsChange?: Maybe<GovernanceChange>;
};

export type GovernanceChange = {
  __typename?: 'GovernanceChange';
  id: Scalars['ID'];
  type: GovernanceChangeType;
  requestedAt: Scalars['BigInt'];
  takesEffectAfter: Scalars['BigInt'];
  requestBlock: Scalars['BigInt'];
  requestTransactionHash: Scalars['String'];
  finalizeBlock?: Maybe<Scalars['BigInt']>;
  finalizeTransactionHash?: Maybe<Scalars['String']>;
  newLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  newSignerFeeDivisor?: Maybe<Scalars['Int']>;
  newFactorySelector?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  newPriceFeed?: Maybe<Scalars['Bytes']>;
  newInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  prevSignerFeeDivisor?: Maybe<Scalars['Int']>;
  prevFactorySelector?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  prevInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
};

export enum GovernanceChangeType {
  LotSizes = 'LOT_SIZES',
  SignerFeeDivisor = 'SIGNER_FEE_DIVISOR',
  KeepFactories = 'KEEP_FACTORIES',
  CollateralizationThresholds = 'COLLATERALIZATION_THRESHOLDS',
  EthBtcPriceFeedAddition = 'ETH_BTC_PRICE_FEED_ADDITION'
}

export type GovernanceChange_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  type?: Maybe<GovernanceChangeType>;
  type_not?: Maybe<GovernanceChangeType>;
  requestedAt?: Maybe<Scalars['BigInt']>;
  requestedAt_not?: Maybe<Scalars['BigInt']>;
  requestedAt_gt?: Maybe<Scalars['BigInt']>;
  requestedAt_lt?: Maybe<Scalars['BigInt']>;
  requestedAt_gte?: Maybe<Scalars['BigInt']>;
  requestedAt_lte?: Maybe<Scalars['BigInt']>;
  requestedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  takesEffectAfter?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_not?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_gt?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_lt?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_gte?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_lte?: Maybe<Scalars['BigInt']>;
  takesEffectAfter_in?: Maybe<Array<Scalars['BigInt']>>;
  takesEffectAfter_not_in?: Maybe<Array<Scalars['BigInt']>>;
  requestBlock?: Maybe<Scalars['BigInt']>;
  requestBlock_not?: Maybe<Scalars['BigInt']>;
  requestBlock_gt?: Maybe<Scalars['BigInt']>;
  requestBlock_lt?: Maybe<Scalars['BigInt']>;
  requestBlock_gte?: Maybe<Scalars['BigInt']>;
  requestBlock_lte?: Maybe<Scalars['BigInt']>;
  requestBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  requestBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  requestTransactionHash?: Maybe<Scalars['String']>;
  requestTransactionHash_not?: Maybe<Scalars['String']>;
  requestTransactionHash_gt?: Maybe<Scalars['String']>;
  requestTransactionHash_lt?: Maybe<Scalars['String']>;
  requestTransactionHash_gte?: Maybe<Scalars['String']>;
  requestTransactionHash_lte?: Maybe<Scalars['String']>;
  requestTransactionHash_in?: Maybe<Array<Scalars['String']>>;
  requestTransactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  requestTransactionHash_contains?: Maybe<Scalars['String']>;
  requestTransactionHash_not_contains?: Maybe<Scalars['String']>;
  requestTransactionHash_starts_with?: Maybe<Scalars['String']>;
  requestTransactionHash_not_starts_with?: Maybe<Scalars['String']>;
  requestTransactionHash_ends_with?: Maybe<Scalars['String']>;
  requestTransactionHash_not_ends_with?: Maybe<Scalars['String']>;
  finalizeBlock?: Maybe<Scalars['BigInt']>;
  finalizeBlock_not?: Maybe<Scalars['BigInt']>;
  finalizeBlock_gt?: Maybe<Scalars['BigInt']>;
  finalizeBlock_lt?: Maybe<Scalars['BigInt']>;
  finalizeBlock_gte?: Maybe<Scalars['BigInt']>;
  finalizeBlock_lte?: Maybe<Scalars['BigInt']>;
  finalizeBlock_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizeBlock_not_in?: Maybe<Array<Scalars['BigInt']>>;
  finalizeTransactionHash?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not?: Maybe<Scalars['String']>;
  finalizeTransactionHash_gt?: Maybe<Scalars['String']>;
  finalizeTransactionHash_lt?: Maybe<Scalars['String']>;
  finalizeTransactionHash_gte?: Maybe<Scalars['String']>;
  finalizeTransactionHash_lte?: Maybe<Scalars['String']>;
  finalizeTransactionHash_in?: Maybe<Array<Scalars['String']>>;
  finalizeTransactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  finalizeTransactionHash_contains?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not_contains?: Maybe<Scalars['String']>;
  finalizeTransactionHash_starts_with?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not_starts_with?: Maybe<Scalars['String']>;
  finalizeTransactionHash_ends_with?: Maybe<Scalars['String']>;
  finalizeTransactionHash_not_ends_with?: Maybe<Scalars['String']>;
  newLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  newLotSizes_not?: Maybe<Array<Scalars['BigInt']>>;
  newLotSizes_contains?: Maybe<Array<Scalars['BigInt']>>;
  newLotSizes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  newSignerFeeDivisor?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_not?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_gt?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_lt?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_gte?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_lte?: Maybe<Scalars['Int']>;
  newSignerFeeDivisor_in?: Maybe<Array<Scalars['Int']>>;
  newSignerFeeDivisor_not_in?: Maybe<Array<Scalars['Int']>>;
  newFactorySelector?: Maybe<Scalars['Bytes']>;
  newFactorySelector_not?: Maybe<Scalars['Bytes']>;
  newFactorySelector_in?: Maybe<Array<Scalars['Bytes']>>;
  newFactorySelector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newFactorySelector_contains?: Maybe<Scalars['Bytes']>;
  newFactorySelector_not_contains?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory_not?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  newFullyBackedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newFullyBackedFactory_contains?: Maybe<Scalars['Bytes']>;
  newFullyBackedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory_not?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  newKeepStakedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newKeepStakedFactory_contains?: Maybe<Scalars['Bytes']>;
  newKeepStakedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  newPriceFeed?: Maybe<Scalars['Bytes']>;
  newPriceFeed_not?: Maybe<Scalars['Bytes']>;
  newPriceFeed_in?: Maybe<Array<Scalars['Bytes']>>;
  newPriceFeed_not_in?: Maybe<Array<Scalars['Bytes']>>;
  newPriceFeed_contains?: Maybe<Scalars['Bytes']>;
  newPriceFeed_not_contains?: Maybe<Scalars['Bytes']>;
  newInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  newInitialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  newInitialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  newSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  newSeverelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  newSeverelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  newUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  newUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  newUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  prevLotSizes?: Maybe<Array<Scalars['BigInt']>>;
  prevLotSizes_not?: Maybe<Array<Scalars['BigInt']>>;
  prevLotSizes_contains?: Maybe<Array<Scalars['BigInt']>>;
  prevLotSizes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  prevSignerFeeDivisor?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_not?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_gt?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_lt?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_gte?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_lte?: Maybe<Scalars['Int']>;
  prevSignerFeeDivisor_in?: Maybe<Array<Scalars['Int']>>;
  prevSignerFeeDivisor_not_in?: Maybe<Array<Scalars['Int']>>;
  prevFactorySelector?: Maybe<Scalars['Bytes']>;
  prevFactorySelector_not?: Maybe<Scalars['Bytes']>;
  prevFactorySelector_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFactorySelector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFactorySelector_contains?: Maybe<Scalars['Bytes']>;
  prevFactorySelector_not_contains?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory_not?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFullyBackedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prevFullyBackedFactory_contains?: Maybe<Scalars['Bytes']>;
  prevFullyBackedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory_not?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  prevKeepStakedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  prevKeepStakedFactory_contains?: Maybe<Scalars['Bytes']>;
  prevKeepStakedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  prevInitialCollateralizedPercent?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  prevInitialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  prevInitialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  prevSeverelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  prevSeverelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  prevSeverelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  prevUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  prevUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  prevUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum GovernanceChange_OrderBy {
  Id = 'id',
  Type = 'type',
  RequestedAt = 'requestedAt',
  TakesEffectAfter = 'takesEffectAfter',
  RequestBlock = 'requestBlock',
  RequestTransactionHash = 'requestTransactionHash',
  FinalizeBlock = 'finalizeBlock',
  FinalizeTransactionHash = 'finalizeTransactionHash',
  NewLotSizes = 'newLotSizes',
  NewSignerFeeDivisor = 'newSignerFeeDivisor',
  NewFactorySelector = 'newFactorySelector',
  NewFullyBackedFactory = 'newFullyBackedFactory',
  NewKeepStakedFactory = 'newKeepStakedFactory',
  NewPriceFeed = 'newPriceFeed',
  NewInitialCollateralizedPercent = 'newInitialCollateralizedPercent',
  NewSeverelyUndercollateralizedThresholdPercent = 'newSeverelyUndercollateralizedThresholdPercent',
  NewUndercollateralizedThresholdPercent = 'newUndercollateralizedThresholdPercent',
  PrevLotSizes = 'prevLotSizes',
  PrevSignerFeeDivisor = 'prevSignerFeeDivisor',
  PrevFactorySelector = 'prevFactorySelector',
  PrevFullyBackedFactory = 'prevFullyBackedFactory',
  PrevKeepStakedFactory = 'prevKeepStakedFactory',
  PrevInitialCollateralizedPercent = 'prevInitialCollateralizedPercent',
  PrevSeverelyUndercollateralizedThresholdPercent = 'prevSeverelyUndercollateralizedThresholdPercent',
  PrevUndercollateralizedThresholdPercent = 'prevUndercollateralizedThresholdPercent'
}

export type GovernanceLogEntry = {
  __typename?: 'GovernanceLogEntry';
  id: Scalars['ID'];
  timestamp: Scalars['BigInt'];
  submitter: Scalars['Bytes'];
  block: Scalars['BigInt'];
  transactionHash: Scalars['String'];
  isRequest: Scalars['Boolean'];
  change?: Maybe<GovernanceChange>;
};

export type GovernanceLogEntry_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  block?: Maybe<Scalars['BigInt']>;
  block_not?: Maybe<Scalars['BigInt']>;
  block_gt?: Maybe<Scalars['BigInt']>;
  block_lt?: Maybe<Scalars['BigInt']>;
  block_gte?: Maybe<Scalars['BigInt']>;
  block_lte?: Maybe<Scalars['BigInt']>;
  block_in?: Maybe<Array<Scalars['BigInt']>>;
  block_not_in?: Maybe<Array<Scalars['BigInt']>>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  isRequest?: Maybe<Scalars['Boolean']>;
  isRequest_not?: Maybe<Scalars['Boolean']>;
  isRequest_in?: Maybe<Array<Scalars['Boolean']>>;
  isRequest_not_in?: Maybe<Array<Scalars['Boolean']>>;
  change?: Maybe<Scalars['String']>;
  change_not?: Maybe<Scalars['String']>;
  change_gt?: Maybe<Scalars['String']>;
  change_lt?: Maybe<Scalars['String']>;
  change_gte?: Maybe<Scalars['String']>;
  change_lte?: Maybe<Scalars['String']>;
  change_in?: Maybe<Array<Scalars['String']>>;
  change_not_in?: Maybe<Array<Scalars['String']>>;
  change_contains?: Maybe<Scalars['String']>;
  change_not_contains?: Maybe<Scalars['String']>;
  change_starts_with?: Maybe<Scalars['String']>;
  change_not_starts_with?: Maybe<Scalars['String']>;
  change_ends_with?: Maybe<Scalars['String']>;
  change_not_ends_with?: Maybe<Scalars['String']>;
};

export enum GovernanceLogEntry_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Submitter = 'submitter',
  Block = 'block',
  TransactionHash = 'transactionHash',
  IsRequest = 'isRequest',
  Change = 'change'
}

export type Governance_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  newDepositsAllowed?: Maybe<Scalars['Boolean']>;
  newDepositsAllowed_not?: Maybe<Scalars['Boolean']>;
  newDepositsAllowed_in?: Maybe<Array<Scalars['Boolean']>>;
  newDepositsAllowed_not_in?: Maybe<Array<Scalars['Boolean']>>;
  signerFeeDivisor?: Maybe<Scalars['Int']>;
  signerFeeDivisor_not?: Maybe<Scalars['Int']>;
  signerFeeDivisor_gt?: Maybe<Scalars['Int']>;
  signerFeeDivisor_lt?: Maybe<Scalars['Int']>;
  signerFeeDivisor_gte?: Maybe<Scalars['Int']>;
  signerFeeDivisor_lte?: Maybe<Scalars['Int']>;
  signerFeeDivisor_in?: Maybe<Array<Scalars['Int']>>;
  signerFeeDivisor_not_in?: Maybe<Array<Scalars['Int']>>;
  pendingSignerFeeDivisorChange?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_gt?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_lt?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_gte?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_lte?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_in?: Maybe<Array<Scalars['String']>>;
  pendingSignerFeeDivisorChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingSignerFeeDivisorChange_contains?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not_contains?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_starts_with?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_ends_with?: Maybe<Scalars['String']>;
  pendingSignerFeeDivisorChange_not_ends_with?: Maybe<Scalars['String']>;
  lotSizes?: Maybe<Array<Scalars['BigInt']>>;
  lotSizes_not?: Maybe<Array<Scalars['BigInt']>>;
  lotSizes_contains?: Maybe<Array<Scalars['BigInt']>>;
  lotSizes_not_contains?: Maybe<Array<Scalars['BigInt']>>;
  pendingLotSizeChange?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not?: Maybe<Scalars['String']>;
  pendingLotSizeChange_gt?: Maybe<Scalars['String']>;
  pendingLotSizeChange_lt?: Maybe<Scalars['String']>;
  pendingLotSizeChange_gte?: Maybe<Scalars['String']>;
  pendingLotSizeChange_lte?: Maybe<Scalars['String']>;
  pendingLotSizeChange_in?: Maybe<Array<Scalars['String']>>;
  pendingLotSizeChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingLotSizeChange_contains?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not_contains?: Maybe<Scalars['String']>;
  pendingLotSizeChange_starts_with?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingLotSizeChange_ends_with?: Maybe<Scalars['String']>;
  pendingLotSizeChange_not_ends_with?: Maybe<Scalars['String']>;
  factorySelector?: Maybe<Scalars['Bytes']>;
  factorySelector_not?: Maybe<Scalars['Bytes']>;
  factorySelector_in?: Maybe<Array<Scalars['Bytes']>>;
  factorySelector_not_in?: Maybe<Array<Scalars['Bytes']>>;
  factorySelector_contains?: Maybe<Scalars['Bytes']>;
  factorySelector_not_contains?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory_not?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  fullyBackedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  fullyBackedFactory_contains?: Maybe<Scalars['Bytes']>;
  fullyBackedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  keepStakedFactory?: Maybe<Scalars['Bytes']>;
  keepStakedFactory_not?: Maybe<Scalars['Bytes']>;
  keepStakedFactory_in?: Maybe<Array<Scalars['Bytes']>>;
  keepStakedFactory_not_in?: Maybe<Array<Scalars['Bytes']>>;
  keepStakedFactory_contains?: Maybe<Scalars['Bytes']>;
  keepStakedFactory_not_contains?: Maybe<Scalars['Bytes']>;
  pendingFactoriesChange?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not?: Maybe<Scalars['String']>;
  pendingFactoriesChange_gt?: Maybe<Scalars['String']>;
  pendingFactoriesChange_lt?: Maybe<Scalars['String']>;
  pendingFactoriesChange_gte?: Maybe<Scalars['String']>;
  pendingFactoriesChange_lte?: Maybe<Scalars['String']>;
  pendingFactoriesChange_in?: Maybe<Array<Scalars['String']>>;
  pendingFactoriesChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingFactoriesChange_contains?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not_contains?: Maybe<Scalars['String']>;
  pendingFactoriesChange_starts_with?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingFactoriesChange_ends_with?: Maybe<Scalars['String']>;
  pendingFactoriesChange_not_ends_with?: Maybe<Scalars['String']>;
  priceFeeds?: Maybe<Array<Scalars['Bytes']>>;
  priceFeeds_not?: Maybe<Array<Scalars['Bytes']>>;
  priceFeeds_contains?: Maybe<Array<Scalars['Bytes']>>;
  priceFeeds_not_contains?: Maybe<Array<Scalars['Bytes']>>;
  pendingPriceFeedAddition?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_gt?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_lt?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_gte?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_lte?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_in?: Maybe<Array<Scalars['String']>>;
  pendingPriceFeedAddition_not_in?: Maybe<Array<Scalars['String']>>;
  pendingPriceFeedAddition_contains?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not_contains?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_starts_with?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not_starts_with?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_ends_with?: Maybe<Scalars['String']>;
  pendingPriceFeedAddition_not_ends_with?: Maybe<Scalars['String']>;
  initialCollateralizedPercent?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_not?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lt?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_gte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_lte?: Maybe<Scalars['Int']>;
  initialCollateralizedPercent_in?: Maybe<Array<Scalars['Int']>>;
  initialCollateralizedPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  severelyUndercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  severelyUndercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_not?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lt?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_gte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_lte?: Maybe<Scalars['Int']>;
  undercollateralizedThresholdPercent_in?: Maybe<Array<Scalars['Int']>>;
  undercollateralizedThresholdPercent_not_in?: Maybe<Array<Scalars['Int']>>;
  pendingCollateralizationThresholdsChange?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_gt?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_lt?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_gte?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_lte?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_in?: Maybe<Array<Scalars['String']>>;
  pendingCollateralizationThresholdsChange_not_in?: Maybe<Array<Scalars['String']>>;
  pendingCollateralizationThresholdsChange_contains?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not_contains?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_starts_with?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not_starts_with?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_ends_with?: Maybe<Scalars['String']>;
  pendingCollateralizationThresholdsChange_not_ends_with?: Maybe<Scalars['String']>;
};

export enum Governance_OrderBy {
  Id = 'id',
  NewDepositsAllowed = 'newDepositsAllowed',
  SignerFeeDivisor = 'signerFeeDivisor',
  PendingSignerFeeDivisorChange = 'pendingSignerFeeDivisorChange',
  LotSizes = 'lotSizes',
  PendingLotSizeChange = 'pendingLotSizeChange',
  FactorySelector = 'factorySelector',
  FullyBackedFactory = 'fullyBackedFactory',
  KeepStakedFactory = 'keepStakedFactory',
  PendingFactoriesChange = 'pendingFactoriesChange',
  PriceFeeds = 'priceFeeds',
  PendingPriceFeedAddition = 'pendingPriceFeedAddition',
  InitialCollateralizedPercent = 'initialCollateralizedPercent',
  SeverelyUndercollateralizedThresholdPercent = 'severelyUndercollateralizedThresholdPercent',
  UndercollateralizedThresholdPercent = 'undercollateralizedThresholdPercent',
  PendingCollateralizationThresholdsChange = 'pendingCollateralizationThresholdsChange'
}

export type LiquidatedEvent = Event & {
  __typename?: 'LiquidatedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
};

export type LiquidatedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
};

export enum LiquidatedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit'
}

export enum LiquidationCause {
  Fraud = 'FRAUD',
  Undercollaterized = 'UNDERCOLLATERIZED',
  SignatureTimeout = 'SIGNATURE_TIMEOUT',
  ProofTimeout = 'PROOF_TIMEOUT'
}

/** A lock on an operator stake. */
export type Lock = {
  __typename?: 'Lock';
  id: Scalars['ID'];
  creator: Scalars['Bytes'];
  operator: Operator;
  until: Scalars['BigInt'];
};

export type Lock_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  creator?: Maybe<Scalars['Bytes']>;
  creator_not?: Maybe<Scalars['Bytes']>;
  creator_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  creator_contains?: Maybe<Scalars['Bytes']>;
  creator_not_contains?: Maybe<Scalars['Bytes']>;
  operator?: Maybe<Scalars['String']>;
  operator_not?: Maybe<Scalars['String']>;
  operator_gt?: Maybe<Scalars['String']>;
  operator_lt?: Maybe<Scalars['String']>;
  operator_gte?: Maybe<Scalars['String']>;
  operator_lte?: Maybe<Scalars['String']>;
  operator_in?: Maybe<Array<Scalars['String']>>;
  operator_not_in?: Maybe<Array<Scalars['String']>>;
  operator_contains?: Maybe<Scalars['String']>;
  operator_not_contains?: Maybe<Scalars['String']>;
  operator_starts_with?: Maybe<Scalars['String']>;
  operator_not_starts_with?: Maybe<Scalars['String']>;
  operator_ends_with?: Maybe<Scalars['String']>;
  operator_not_ends_with?: Maybe<Scalars['String']>;
  until?: Maybe<Scalars['BigInt']>;
  until_not?: Maybe<Scalars['BigInt']>;
  until_gt?: Maybe<Scalars['BigInt']>;
  until_lt?: Maybe<Scalars['BigInt']>;
  until_gte?: Maybe<Scalars['BigInt']>;
  until_lte?: Maybe<Scalars['BigInt']>;
  until_in?: Maybe<Array<Scalars['BigInt']>>;
  until_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Lock_OrderBy {
  Id = 'id',
  Creator = 'creator',
  Operator = 'operator',
  Until = 'until'
}

/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type Operator = {
  __typename?: 'Operator';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  keeps?: Maybe<Array<BondedEcdsaKeep>>;
  bonds: Array<Bond>;
  locks: Array<Lock>;
  owner?: Maybe<Scalars['Bytes']>;
  operator?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  authorizer?: Maybe<Scalars['Bytes']>;
  bonded: Scalars['BigDecimal'];
  unboundAvailable: Scalars['BigDecimal'];
  totalKeepCount: Scalars['Int'];
  activeKeepCount: Scalars['Int'];
  stakedAmount: Scalars['BigDecimal'];
  totalTBTCRewards: Scalars['BigDecimal'];
  /** How often this operator was involved in a fault, attributable to them. */
  attributableFaultCount: Scalars['Int'];
  /** How often this operator was involved in a fault, attributable to them. */
  involvedInFaultCount: Scalars['Int'];
  /** How often this operator was involved in a fault, either attributable or not. */
  totalFaultCount: Scalars['Int'];
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorBondsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bond_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bond_Filter>;
};


/**
 * A node operator.
 * 
 * In Staking terms (https://docs.keep.network/random-beacon/staking/), there is an abstract role called the Staker,
 * representing owner, operator, beneficiary and authorizer. "Stakers are identified by their operator address", and
 * in our graph, through the Operator entity. Understand that in staking terms, only a single owner can delegate
 * their tokens to a particular owner, so the tokens staked always come from the samea address.
 */
export type OperatorLocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Lock_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Lock_Filter>;
};

export type Operator_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  operator?: Maybe<Scalars['Bytes']>;
  operator_not?: Maybe<Scalars['Bytes']>;
  operator_in?: Maybe<Array<Scalars['Bytes']>>;
  operator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  operator_contains?: Maybe<Scalars['Bytes']>;
  operator_not_contains?: Maybe<Scalars['Bytes']>;
  beneficiary?: Maybe<Scalars['Bytes']>;
  beneficiary_not?: Maybe<Scalars['Bytes']>;
  beneficiary_in?: Maybe<Array<Scalars['Bytes']>>;
  beneficiary_not_in?: Maybe<Array<Scalars['Bytes']>>;
  beneficiary_contains?: Maybe<Scalars['Bytes']>;
  beneficiary_not_contains?: Maybe<Scalars['Bytes']>;
  authorizer?: Maybe<Scalars['Bytes']>;
  authorizer_not?: Maybe<Scalars['Bytes']>;
  authorizer_in?: Maybe<Array<Scalars['Bytes']>>;
  authorizer_not_in?: Maybe<Array<Scalars['Bytes']>>;
  authorizer_contains?: Maybe<Scalars['Bytes']>;
  authorizer_not_contains?: Maybe<Scalars['Bytes']>;
  bonded?: Maybe<Scalars['BigDecimal']>;
  bonded_not?: Maybe<Scalars['BigDecimal']>;
  bonded_gt?: Maybe<Scalars['BigDecimal']>;
  bonded_lt?: Maybe<Scalars['BigDecimal']>;
  bonded_gte?: Maybe<Scalars['BigDecimal']>;
  bonded_lte?: Maybe<Scalars['BigDecimal']>;
  bonded_in?: Maybe<Array<Scalars['BigDecimal']>>;
  bonded_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  unboundAvailable?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_not?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_gt?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_lt?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_gte?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_lte?: Maybe<Scalars['BigDecimal']>;
  unboundAvailable_in?: Maybe<Array<Scalars['BigDecimal']>>;
  unboundAvailable_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalKeepCount?: Maybe<Scalars['Int']>;
  totalKeepCount_not?: Maybe<Scalars['Int']>;
  totalKeepCount_gt?: Maybe<Scalars['Int']>;
  totalKeepCount_lt?: Maybe<Scalars['Int']>;
  totalKeepCount_gte?: Maybe<Scalars['Int']>;
  totalKeepCount_lte?: Maybe<Scalars['Int']>;
  totalKeepCount_in?: Maybe<Array<Scalars['Int']>>;
  totalKeepCount_not_in?: Maybe<Array<Scalars['Int']>>;
  activeKeepCount?: Maybe<Scalars['Int']>;
  activeKeepCount_not?: Maybe<Scalars['Int']>;
  activeKeepCount_gt?: Maybe<Scalars['Int']>;
  activeKeepCount_lt?: Maybe<Scalars['Int']>;
  activeKeepCount_gte?: Maybe<Scalars['Int']>;
  activeKeepCount_lte?: Maybe<Scalars['Int']>;
  activeKeepCount_in?: Maybe<Array<Scalars['Int']>>;
  activeKeepCount_not_in?: Maybe<Array<Scalars['Int']>>;
  stakedAmount?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_not?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_gt?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_lt?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_gte?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_lte?: Maybe<Scalars['BigDecimal']>;
  stakedAmount_in?: Maybe<Array<Scalars['BigDecimal']>>;
  stakedAmount_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalTBTCRewards?: Maybe<Scalars['BigDecimal']>;
  totalTBTCRewards_not?: Maybe<Scalars['BigDecimal']>;
  totalTBTCRewards_gt?: Maybe<Scalars['BigDecimal']>;
  totalTBTCRewards_lt?: Maybe<Scalars['BigDecimal']>;
  totalTBTCRewards_gte?: Maybe<Scalars['BigDecimal']>;
  totalTBTCRewards_lte?: Maybe<Scalars['BigDecimal']>;
  totalTBTCRewards_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalTBTCRewards_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  attributableFaultCount?: Maybe<Scalars['Int']>;
  attributableFaultCount_not?: Maybe<Scalars['Int']>;
  attributableFaultCount_gt?: Maybe<Scalars['Int']>;
  attributableFaultCount_lt?: Maybe<Scalars['Int']>;
  attributableFaultCount_gte?: Maybe<Scalars['Int']>;
  attributableFaultCount_lte?: Maybe<Scalars['Int']>;
  attributableFaultCount_in?: Maybe<Array<Scalars['Int']>>;
  attributableFaultCount_not_in?: Maybe<Array<Scalars['Int']>>;
  involvedInFaultCount?: Maybe<Scalars['Int']>;
  involvedInFaultCount_not?: Maybe<Scalars['Int']>;
  involvedInFaultCount_gt?: Maybe<Scalars['Int']>;
  involvedInFaultCount_lt?: Maybe<Scalars['Int']>;
  involvedInFaultCount_gte?: Maybe<Scalars['Int']>;
  involvedInFaultCount_lte?: Maybe<Scalars['Int']>;
  involvedInFaultCount_in?: Maybe<Array<Scalars['Int']>>;
  involvedInFaultCount_not_in?: Maybe<Array<Scalars['Int']>>;
  totalFaultCount?: Maybe<Scalars['Int']>;
  totalFaultCount_not?: Maybe<Scalars['Int']>;
  totalFaultCount_gt?: Maybe<Scalars['Int']>;
  totalFaultCount_lt?: Maybe<Scalars['Int']>;
  totalFaultCount_gte?: Maybe<Scalars['Int']>;
  totalFaultCount_lte?: Maybe<Scalars['Int']>;
  totalFaultCount_in?: Maybe<Array<Scalars['Int']>>;
  totalFaultCount_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Operator_OrderBy {
  Id = 'id',
  Address = 'address',
  Keeps = 'keeps',
  Bonds = 'bonds',
  Locks = 'locks',
  Owner = 'owner',
  Operator = 'operator',
  Beneficiary = 'beneficiary',
  Authorizer = 'authorizer',
  Bonded = 'bonded',
  UnboundAvailable = 'unboundAvailable',
  TotalKeepCount = 'totalKeepCount',
  ActiveKeepCount = 'activeKeepCount',
  StakedAmount = 'stakedAmount',
  TotalTbtcRewards = 'totalTBTCRewards',
  AttributableFaultCount = 'attributableFaultCount',
  InvolvedInFaultCount = 'involvedInFaultCount',
  TotalFaultCount = 'totalFaultCount'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  tbtcdepositToken?: Maybe<TbtcDepositToken>;
  tbtcdepositTokens: Array<TbtcDepositToken>;
  createdEvent?: Maybe<CreatedEvent>;
  createdEvents: Array<CreatedEvent>;
  fundedEvent?: Maybe<FundedEvent>;
  fundedEvents: Array<FundedEvent>;
  registeredPubKeyEvent?: Maybe<RegisteredPubKeyEvent>;
  registeredPubKeyEvents: Array<RegisteredPubKeyEvent>;
  redeemedEvent?: Maybe<RedeemedEvent>;
  redeemedEvents: Array<RedeemedEvent>;
  gotRedemptionSignatureEvent?: Maybe<GotRedemptionSignatureEvent>;
  gotRedemptionSignatureEvents: Array<GotRedemptionSignatureEvent>;
  redemptionRequestedEvent?: Maybe<RedemptionRequestedEvent>;
  redemptionRequestedEvents: Array<RedemptionRequestedEvent>;
  setupFailedEvent?: Maybe<SetupFailedEvent>;
  setupFailedEvents: Array<SetupFailedEvent>;
  liquidatedEvent?: Maybe<LiquidatedEvent>;
  liquidatedEvents: Array<LiquidatedEvent>;
  courtesyCalledEvent?: Maybe<CourtesyCalledEvent>;
  courtesyCalledEvents: Array<CourtesyCalledEvent>;
  startedLiquidationEvent?: Maybe<StartedLiquidationEvent>;
  startedLiquidationEvents: Array<StartedLiquidationEvent>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  depositSetup?: Maybe<DepositSetup>;
  depositSetups: Array<DepositSetup>;
  depositLiquidation?: Maybe<DepositLiquidation>;
  depositLiquidations: Array<DepositLiquidation>;
  depositRedemption?: Maybe<DepositRedemption>;
  depositRedemptions: Array<DepositRedemption>;
  user?: Maybe<User>;
  users: Array<User>;
  operator?: Maybe<Operator>;
  operators: Array<Operator>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  bond?: Maybe<Bond>;
  bonds: Array<Bond>;
  bondedECDSAKeep?: Maybe<BondedEcdsaKeep>;
  bondedECDSAKeeps: Array<BondedEcdsaKeep>;
  governanceLogEntry?: Maybe<GovernanceLogEntry>;
  governanceLogEntries: Array<GovernanceLogEntry>;
  governanceChange?: Maybe<GovernanceChange>;
  governanceChanges: Array<GovernanceChange>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  statsRecord?: Maybe<StatsRecord>;
  statsRecords: Array<StatsRecord>;
  randomBeaconGroup?: Maybe<RandomBeaconGroup>;
  randomBeaconGroups: Array<RandomBeaconGroup>;
  relayEntry?: Maybe<RelayEntry>;
  relayEntries: Array<RelayEntry>;
  event?: Maybe<Event>;
  events: Array<Event>;
};


export type QueryTbtcdepositTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryTbtcdepositTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TbtcDepositToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TbtcDepositToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryFundedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryFundedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRegisteredPubKeyEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRegisteredPubKeyEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegisteredPubKeyEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegisteredPubKeyEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRedeemedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGotRedemptionSignatureEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGotRedemptionSignatureEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GotRedemptionSignatureEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GotRedemptionSignatureEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRedemptionRequestedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRedemptionRequestedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedemptionRequestedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedemptionRequestedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QuerySetupFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QuerySetupFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SetupFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SetupFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLiquidatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLiquidatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryCourtesyCalledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryCourtesyCalledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CourtesyCalledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CourtesyCalledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStartedLiquidationEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStartedLiquidationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StartedLiquidationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StartedLiquidationEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositSetupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositSetupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositSetup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositSetup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositLiquidation_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryDepositRedemptionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryDepositRedemptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositRedemption_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositRedemption_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryOperatorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryOperatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryLockArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryLocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Lock_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Lock_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBondArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBondsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bond_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bond_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryBondedEcdsaKeepArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryBondedEcdsaKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceLogEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceLogEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceLogEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceLogEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceChangeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceChange_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceChange_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryGovernanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryGovernancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Governance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Governance_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryStatsRecordArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryStatsRecordsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatsRecord_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatsRecord_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRandomBeaconGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRandomBeaconGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryRelayEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryRelayEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RelayEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RelayEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type QueryEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Event_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Event_Filter>;
  block?: Maybe<Block_Height>;
};

export type RandomBeaconGroup = {
  __typename?: 'RandomBeaconGroup';
  id: Scalars['ID'];
  createdAt: Scalars['BigInt'];
  members: Array<Operator>;
};


export type RandomBeaconGroupMembersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
};

export type RandomBeaconGroup_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  createdAt?: Maybe<Scalars['BigInt']>;
  createdAt_not?: Maybe<Scalars['BigInt']>;
  createdAt_gt?: Maybe<Scalars['BigInt']>;
  createdAt_lt?: Maybe<Scalars['BigInt']>;
  createdAt_gte?: Maybe<Scalars['BigInt']>;
  createdAt_lte?: Maybe<Scalars['BigInt']>;
  createdAt_in?: Maybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  members?: Maybe<Array<Scalars['String']>>;
  members_not?: Maybe<Array<Scalars['String']>>;
  members_contains?: Maybe<Array<Scalars['String']>>;
  members_not_contains?: Maybe<Array<Scalars['String']>>;
};

export enum RandomBeaconGroup_OrderBy {
  Id = 'id',
  CreatedAt = 'createdAt',
  Members = 'members'
}

export type RedeemedEvent = Event & {
  __typename?: 'RedeemedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  tx: Scalars['Bytes'];
};

export type RedeemedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  tx?: Maybe<Scalars['Bytes']>;
  tx_not?: Maybe<Scalars['Bytes']>;
  tx_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_not_in?: Maybe<Array<Scalars['Bytes']>>;
  tx_contains?: Maybe<Scalars['Bytes']>;
  tx_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RedeemedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Tx = 'tx'
}

export type RedemptionRequestedEvent = Event & {
  __typename?: 'RedemptionRequestedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  redeemerOutputScript: Scalars['Bytes'];
  requestedFee: Scalars['BigInt'];
  utxoValue: Scalars['BigInt'];
  utxoOutpoint: Scalars['Bytes'];
  redeemer: Scalars['Bytes'];
  sigHashDigest: Scalars['Bytes'];
};

export type RedemptionRequestedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  redeemerOutputScript?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemerOutputScript_contains?: Maybe<Scalars['Bytes']>;
  redeemerOutputScript_not_contains?: Maybe<Scalars['Bytes']>;
  requestedFee?: Maybe<Scalars['BigInt']>;
  requestedFee_not?: Maybe<Scalars['BigInt']>;
  requestedFee_gt?: Maybe<Scalars['BigInt']>;
  requestedFee_lt?: Maybe<Scalars['BigInt']>;
  requestedFee_gte?: Maybe<Scalars['BigInt']>;
  requestedFee_lte?: Maybe<Scalars['BigInt']>;
  requestedFee_in?: Maybe<Array<Scalars['BigInt']>>;
  requestedFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoValue?: Maybe<Scalars['BigInt']>;
  utxoValue_not?: Maybe<Scalars['BigInt']>;
  utxoValue_gt?: Maybe<Scalars['BigInt']>;
  utxoValue_lt?: Maybe<Scalars['BigInt']>;
  utxoValue_gte?: Maybe<Scalars['BigInt']>;
  utxoValue_lte?: Maybe<Scalars['BigInt']>;
  utxoValue_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoValue_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utxoOutpoint?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_not?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_in?: Maybe<Array<Scalars['Bytes']>>;
  utxoOutpoint_not_in?: Maybe<Array<Scalars['Bytes']>>;
  utxoOutpoint_contains?: Maybe<Scalars['Bytes']>;
  utxoOutpoint_not_contains?: Maybe<Scalars['Bytes']>;
  redeemer?: Maybe<Scalars['Bytes']>;
  redeemer_not?: Maybe<Scalars['Bytes']>;
  redeemer_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemer_not_in?: Maybe<Array<Scalars['Bytes']>>;
  redeemer_contains?: Maybe<Scalars['Bytes']>;
  redeemer_not_contains?: Maybe<Scalars['Bytes']>;
  sigHashDigest?: Maybe<Scalars['Bytes']>;
  sigHashDigest_not?: Maybe<Scalars['Bytes']>;
  sigHashDigest_in?: Maybe<Array<Scalars['Bytes']>>;
  sigHashDigest_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sigHashDigest_contains?: Maybe<Scalars['Bytes']>;
  sigHashDigest_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RedemptionRequestedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  RedeemerOutputScript = 'redeemerOutputScript',
  RequestedFee = 'requestedFee',
  UtxoValue = 'utxoValue',
  UtxoOutpoint = 'utxoOutpoint',
  Redeemer = 'redeemer',
  SigHashDigest = 'sigHashDigest'
}

export type RegisteredPubKeyEvent = Event & {
  __typename?: 'RegisteredPubKeyEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  signingGroupPubkeyX: Scalars['Bytes'];
  signingGroupPubkeyY: Scalars['Bytes'];
};

export type RegisteredPubKeyEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  signingGroupPubkeyX?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyX_not?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyX_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyX_not_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyX_contains?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyX_not_contains?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY_not?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyY_not_in?: Maybe<Array<Scalars['Bytes']>>;
  signingGroupPubkeyY_contains?: Maybe<Scalars['Bytes']>;
  signingGroupPubkeyY_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum RegisteredPubKeyEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  SigningGroupPubkeyX = 'signingGroupPubkeyX',
  SigningGroupPubkeyY = 'signingGroupPubkeyY'
}

export type RelayEntry = {
  __typename?: 'RelayEntry';
  id: Scalars['ID'];
};

export type RelayEntry_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum RelayEntry_OrderBy {
  Id = 'id'
}

export type SetupFailedEvent = Event & {
  __typename?: 'SetupFailedEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  /** The reason for the failure, based on which contract call caused the failure state to be entered. */
  reason?: Maybe<SetupFailedReason>;
};

export type SetupFailedEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  reason?: Maybe<SetupFailedReason>;
  reason_not?: Maybe<SetupFailedReason>;
};

export enum SetupFailedEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Reason = 'reason'
}

export enum SetupFailedReason {
  SignerSetupFailed = 'SIGNER_SETUP_FAILED',
  SignerSetupFailedDepositor = 'SIGNER_SETUP_FAILED_DEPOSITOR',
  FundingTimeout = 'FUNDING_TIMEOUT',
  FundingEcdsaFraud = 'FUNDING_ECDSA_FRAUD'
}

export type StartedLiquidationEvent = Event & {
  __typename?: 'StartedLiquidationEvent';
  id: Scalars['ID'];
  submitter: Scalars['Bytes'];
  transactionHash: Scalars['String'];
  timestamp: Scalars['BigInt'];
  deposit?: Maybe<Deposit>;
  /** The cause of this deposit going into liquidation */
  cause?: Maybe<LiquidationCause>;
};

export type StartedLiquidationEvent_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  submitter?: Maybe<Scalars['Bytes']>;
  submitter_not?: Maybe<Scalars['Bytes']>;
  submitter_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  submitter_contains?: Maybe<Scalars['Bytes']>;
  submitter_not_contains?: Maybe<Scalars['Bytes']>;
  transactionHash?: Maybe<Scalars['String']>;
  transactionHash_not?: Maybe<Scalars['String']>;
  transactionHash_gt?: Maybe<Scalars['String']>;
  transactionHash_lt?: Maybe<Scalars['String']>;
  transactionHash_gte?: Maybe<Scalars['String']>;
  transactionHash_lte?: Maybe<Scalars['String']>;
  transactionHash_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_not_in?: Maybe<Array<Scalars['String']>>;
  transactionHash_contains?: Maybe<Scalars['String']>;
  transactionHash_not_contains?: Maybe<Scalars['String']>;
  transactionHash_starts_with?: Maybe<Scalars['String']>;
  transactionHash_not_starts_with?: Maybe<Scalars['String']>;
  transactionHash_ends_with?: Maybe<Scalars['String']>;
  transactionHash_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  cause?: Maybe<LiquidationCause>;
  cause_not?: Maybe<LiquidationCause>;
};

export enum StartedLiquidationEvent_OrderBy {
  Id = 'id',
  Submitter = 'submitter',
  TransactionHash = 'transactionHash',
  Timestamp = 'timestamp',
  Deposit = 'deposit',
  Cause = 'cause'
}

export type StatsRecord = {
  __typename?: 'StatsRecord';
  id: Scalars['ID'];
  availableToBeBonded: Scalars['BigDecimal'];
  totalBonded: Scalars['BigDecimal'];
  totalBondsSeized: Scalars['BigDecimal'];
  /** The total amount of BTC currently deposited, measured from funding proof received to redemption proof received. */
  btcUnderDeposit: Scalars['BigInt'];
  /** The total amount of BTC currently deposited, measured from funding proof received to redemption requested */
  btcInActiveDeposits: Scalars['BigInt'];
};

export type StatsRecord_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  availableToBeBonded?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_not?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_gt?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_lt?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_gte?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_lte?: Maybe<Scalars['BigDecimal']>;
  availableToBeBonded_in?: Maybe<Array<Scalars['BigDecimal']>>;
  availableToBeBonded_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBonded?: Maybe<Scalars['BigDecimal']>;
  totalBonded_not?: Maybe<Scalars['BigDecimal']>;
  totalBonded_gt?: Maybe<Scalars['BigDecimal']>;
  totalBonded_lt?: Maybe<Scalars['BigDecimal']>;
  totalBonded_gte?: Maybe<Scalars['BigDecimal']>;
  totalBonded_lte?: Maybe<Scalars['BigDecimal']>;
  totalBonded_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBonded_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBondsSeized?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_not?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_gt?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_lt?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_gte?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_lte?: Maybe<Scalars['BigDecimal']>;
  totalBondsSeized_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalBondsSeized_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  btcUnderDeposit?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_not?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_gt?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_lt?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_gte?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_lte?: Maybe<Scalars['BigInt']>;
  btcUnderDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  btcUnderDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  btcInActiveDeposits?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_not?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_gt?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_lt?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_gte?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_lte?: Maybe<Scalars['BigInt']>;
  btcInActiveDeposits_in?: Maybe<Array<Scalars['BigInt']>>;
  btcInActiveDeposits_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StatsRecord_OrderBy {
  Id = 'id',
  AvailableToBeBonded = 'availableToBeBonded',
  TotalBonded = 'totalBonded',
  TotalBondsSeized = 'totalBondsSeized',
  BtcUnderDeposit = 'btcUnderDeposit',
  BtcInActiveDeposits = 'btcInActiveDeposits'
}

export type Subscription = {
  __typename?: 'Subscription';
  tbtcdepositToken?: Maybe<TbtcDepositToken>;
  tbtcdepositTokens: Array<TbtcDepositToken>;
  createdEvent?: Maybe<CreatedEvent>;
  createdEvents: Array<CreatedEvent>;
  fundedEvent?: Maybe<FundedEvent>;
  fundedEvents: Array<FundedEvent>;
  registeredPubKeyEvent?: Maybe<RegisteredPubKeyEvent>;
  registeredPubKeyEvents: Array<RegisteredPubKeyEvent>;
  redeemedEvent?: Maybe<RedeemedEvent>;
  redeemedEvents: Array<RedeemedEvent>;
  gotRedemptionSignatureEvent?: Maybe<GotRedemptionSignatureEvent>;
  gotRedemptionSignatureEvents: Array<GotRedemptionSignatureEvent>;
  redemptionRequestedEvent?: Maybe<RedemptionRequestedEvent>;
  redemptionRequestedEvents: Array<RedemptionRequestedEvent>;
  setupFailedEvent?: Maybe<SetupFailedEvent>;
  setupFailedEvents: Array<SetupFailedEvent>;
  liquidatedEvent?: Maybe<LiquidatedEvent>;
  liquidatedEvents: Array<LiquidatedEvent>;
  courtesyCalledEvent?: Maybe<CourtesyCalledEvent>;
  courtesyCalledEvents: Array<CourtesyCalledEvent>;
  startedLiquidationEvent?: Maybe<StartedLiquidationEvent>;
  startedLiquidationEvents: Array<StartedLiquidationEvent>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  depositSetup?: Maybe<DepositSetup>;
  depositSetups: Array<DepositSetup>;
  depositLiquidation?: Maybe<DepositLiquidation>;
  depositLiquidations: Array<DepositLiquidation>;
  depositRedemption?: Maybe<DepositRedemption>;
  depositRedemptions: Array<DepositRedemption>;
  user?: Maybe<User>;
  users: Array<User>;
  operator?: Maybe<Operator>;
  operators: Array<Operator>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  bond?: Maybe<Bond>;
  bonds: Array<Bond>;
  bondedECDSAKeep?: Maybe<BondedEcdsaKeep>;
  bondedECDSAKeeps: Array<BondedEcdsaKeep>;
  governanceLogEntry?: Maybe<GovernanceLogEntry>;
  governanceLogEntries: Array<GovernanceLogEntry>;
  governanceChange?: Maybe<GovernanceChange>;
  governanceChanges: Array<GovernanceChange>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  statsRecord?: Maybe<StatsRecord>;
  statsRecords: Array<StatsRecord>;
  randomBeaconGroup?: Maybe<RandomBeaconGroup>;
  randomBeaconGroups: Array<RandomBeaconGroup>;
  relayEntry?: Maybe<RelayEntry>;
  relayEntries: Array<RelayEntry>;
  event?: Maybe<Event>;
  events: Array<Event>;
};


export type SubscriptionTbtcdepositTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionTbtcdepositTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TbtcDepositToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TbtcDepositToken_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCreatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CreatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CreatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionFundedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FundedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FundedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRegisteredPubKeyEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRegisteredPubKeyEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RegisteredPubKeyEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RegisteredPubKeyEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedeemedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGotRedemptionSignatureEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGotRedemptionSignatureEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GotRedemptionSignatureEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GotRedemptionSignatureEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedemptionRequestedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRedemptionRequestedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedemptionRequestedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedemptionRequestedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionSetupFailedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionSetupFailedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SetupFailedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<SetupFailedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidatedEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLiquidatedEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidatedEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidatedEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionCourtesyCalledEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionCourtesyCalledEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CourtesyCalledEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CourtesyCalledEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStartedLiquidationEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStartedLiquidationEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StartedLiquidationEvent_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StartedLiquidationEvent_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositSetupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositSetupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositSetup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositSetup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositLiquidation_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositRedemptionArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionDepositRedemptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<DepositRedemption_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<DepositRedemption_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionOperatorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionOperatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Operator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Operator_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionLockArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionLocksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Lock_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Lock_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bond_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bond_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondedEcdsaKeepArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionBondedEcdsaKeepsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<BondedEcdsaKeep_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<BondedEcdsaKeep_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceLogEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceLogEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceLogEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceLogEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceChangeArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceChangesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<GovernanceChange_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<GovernanceChange_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernanceArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionGovernancesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Governance_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Governance_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionStatsRecordArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionStatsRecordsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StatsRecord_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StatsRecord_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomBeaconGroupArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRandomBeaconGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RandomBeaconGroup_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RandomBeaconGroup_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionRelayEntryArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionRelayEntriesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RelayEntry_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RelayEntry_Filter>;
  block?: Maybe<Block_Height>;
};


export type SubscriptionEventArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};


export type SubscriptionEventsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Event_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Event_Filter>;
  block?: Maybe<Block_Height>;
};

export type TbtcDepositToken = {
  __typename?: 'TBTCDepositToken';
  id: Scalars['ID'];
  deposit?: Maybe<Deposit>;
  tokenID: Scalars['BigInt'];
  owner: Scalars['Bytes'];
  mintedAt: Scalars['BigInt'];
  minter: Scalars['Bytes'];
};

export type TbtcDepositToken_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  deposit?: Maybe<Scalars['String']>;
  deposit_not?: Maybe<Scalars['String']>;
  deposit_gt?: Maybe<Scalars['String']>;
  deposit_lt?: Maybe<Scalars['String']>;
  deposit_gte?: Maybe<Scalars['String']>;
  deposit_lte?: Maybe<Scalars['String']>;
  deposit_in?: Maybe<Array<Scalars['String']>>;
  deposit_not_in?: Maybe<Array<Scalars['String']>>;
  deposit_contains?: Maybe<Scalars['String']>;
  deposit_not_contains?: Maybe<Scalars['String']>;
  deposit_starts_with?: Maybe<Scalars['String']>;
  deposit_not_starts_with?: Maybe<Scalars['String']>;
  deposit_ends_with?: Maybe<Scalars['String']>;
  deposit_not_ends_with?: Maybe<Scalars['String']>;
  tokenID?: Maybe<Scalars['BigInt']>;
  tokenID_not?: Maybe<Scalars['BigInt']>;
  tokenID_gt?: Maybe<Scalars['BigInt']>;
  tokenID_lt?: Maybe<Scalars['BigInt']>;
  tokenID_gte?: Maybe<Scalars['BigInt']>;
  tokenID_lte?: Maybe<Scalars['BigInt']>;
  tokenID_in?: Maybe<Array<Scalars['BigInt']>>;
  tokenID_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owner?: Maybe<Scalars['Bytes']>;
  owner_not?: Maybe<Scalars['Bytes']>;
  owner_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_not_in?: Maybe<Array<Scalars['Bytes']>>;
  owner_contains?: Maybe<Scalars['Bytes']>;
  owner_not_contains?: Maybe<Scalars['Bytes']>;
  mintedAt?: Maybe<Scalars['BigInt']>;
  mintedAt_not?: Maybe<Scalars['BigInt']>;
  mintedAt_gt?: Maybe<Scalars['BigInt']>;
  mintedAt_lt?: Maybe<Scalars['BigInt']>;
  mintedAt_gte?: Maybe<Scalars['BigInt']>;
  mintedAt_lte?: Maybe<Scalars['BigInt']>;
  mintedAt_in?: Maybe<Array<Scalars['BigInt']>>;
  mintedAt_not_in?: Maybe<Array<Scalars['BigInt']>>;
  minter?: Maybe<Scalars['Bytes']>;
  minter_not?: Maybe<Scalars['Bytes']>;
  minter_in?: Maybe<Array<Scalars['Bytes']>>;
  minter_not_in?: Maybe<Array<Scalars['Bytes']>>;
  minter_contains?: Maybe<Scalars['Bytes']>;
  minter_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum TbtcDepositToken_OrderBy {
  Id = 'id',
  Deposit = 'deposit',
  TokenId = 'tokenID',
  Owner = 'owner',
  MintedAt = 'mintedAt',
  Minter = 'minter'
}

/** An actor using the minting and redeeming facilities. */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  address: Scalars['Bytes'];
  /** The number of deposits the user initiated. */
  numDepositsCreated: Scalars['Int'];
  /** The number of deposits the user initiated, then did not complete the funding process of. Excludes any deposits which failed due to signer issues. */
  numDepositsUnfunded: Scalars['Int'];
  /** The number of deposits the user requested to be redeemed. */
  numDepositsRedeemed: Scalars['Int'];
  /** The number of deposits the user requested to be redeemed, where the deposit was also created by them. */
  numOwnDepositsRedeemed: Scalars['Int'];
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  address?: Maybe<Scalars['Bytes']>;
  address_not?: Maybe<Scalars['Bytes']>;
  address_in?: Maybe<Array<Scalars['Bytes']>>;
  address_not_in?: Maybe<Array<Scalars['Bytes']>>;
  address_contains?: Maybe<Scalars['Bytes']>;
  address_not_contains?: Maybe<Scalars['Bytes']>;
  numDepositsCreated?: Maybe<Scalars['Int']>;
  numDepositsCreated_not?: Maybe<Scalars['Int']>;
  numDepositsCreated_gt?: Maybe<Scalars['Int']>;
  numDepositsCreated_lt?: Maybe<Scalars['Int']>;
  numDepositsCreated_gte?: Maybe<Scalars['Int']>;
  numDepositsCreated_lte?: Maybe<Scalars['Int']>;
  numDepositsCreated_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsCreated_not_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsUnfunded?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_not?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_gt?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_lt?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_gte?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_lte?: Maybe<Scalars['Int']>;
  numDepositsUnfunded_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsUnfunded_not_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsRedeemed?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_not?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_gt?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_lt?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_gte?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_lte?: Maybe<Scalars['Int']>;
  numDepositsRedeemed_in?: Maybe<Array<Scalars['Int']>>;
  numDepositsRedeemed_not_in?: Maybe<Array<Scalars['Int']>>;
  numOwnDepositsRedeemed?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_not?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_gt?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_lt?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_gte?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_lte?: Maybe<Scalars['Int']>;
  numOwnDepositsRedeemed_in?: Maybe<Array<Scalars['Int']>>;
  numOwnDepositsRedeemed_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum User_OrderBy {
  Id = 'id',
  Address = 'address',
  NumDepositsCreated = 'numDepositsCreated',
  NumDepositsUnfunded = 'numDepositsUnfunded',
  NumDepositsRedeemed = 'numDepositsRedeemed',
  NumOwnDepositsRedeemed = 'numOwnDepositsRedeemed'
}

export type GetDepositQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDepositQuery = (
  { __typename?: 'Query' }
  & { deposit?: Maybe<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'id' | 'contractAddress' | 'currentState' | 'createdAt' | 'keepAddress' | 'lotSizeSatoshis' | 'endOfTerm' | 'initialCollateralizedPercent' | 'undercollateralizedThresholdPercent' | 'severelyUndercollateralizedThresholdPercent'>
    & { tdtToken: (
      { __typename?: 'TBTCDepositToken' }
      & Pick<TbtcDepositToken, 'id' | 'tokenID' | 'owner' | 'minter'>
    ), bondedECDSAKeep?: Maybe<(
      { __typename?: 'BondedECDSAKeep' }
      & Pick<BondedEcdsaKeep, 'id' | 'keepAddress' | 'totalBondAmount' | 'publicKey' | 'status' | 'honestThreshold'>
      & { members: Array<Maybe<(
        { __typename?: 'Operator' }
        & Pick<Operator, 'id' | 'address'>
      )>> }
    )>, depositLiquidation?: Maybe<(
      { __typename?: 'DepositLiquidation' }
      & Pick<DepositLiquidation, 'cause'>
    )> }
    & NiceStateLabelFragment
  )> }
);

export type WatchDepositSubscriptionVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WatchDepositSubscription = (
  { __typename?: 'Subscription' }
  & { deposit?: Maybe<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'id' | 'currentState'>
  )> }
);

export type GetDepositLogsQueryVariables = Exact<{
  depositId: Scalars['String'];
}>;


export type GetDepositLogsQuery = (
  { __typename?: 'Query' }
  & { events: Array<(
    { __typename: 'CourtesyCalledEvent' }
    & Pick<CourtesyCalledEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'CreatedEvent' }
    & Pick<CreatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'FundedEvent' }
    & Pick<FundedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'GotRedemptionSignatureEvent' }
    & Pick<GotRedemptionSignatureEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'LiquidatedEvent' }
    & Pick<LiquidatedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedeemedEvent' }
    & Pick<RedeemedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RedemptionRequestedEvent' }
    & Pick<RedemptionRequestedEvent, 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'RegisteredPubKeyEvent' }
    & Pick<RegisteredPubKeyEvent, 'signingGroupPubkeyX' | 'signingGroupPubkeyY' | 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  ) | (
    { __typename: 'SetupFailedEvent' }
    & Pick<SetupFailedEvent, 'reason' | 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
    & { deposit?: Maybe<(
      { __typename?: 'Deposit' }
      & { bondedECDSAKeep?: Maybe<(
        { __typename?: 'BondedECDSAKeep' }
        & { pubkeySubmissions: Array<Maybe<(
          { __typename?: 'Operator' }
          & Pick<Operator, 'address'>
        )>>, members: Array<Maybe<(
          { __typename?: 'Operator' }
          & Pick<Operator, 'address'>
        )>> }
      )> }
    )> }
  ) | (
    { __typename: 'StartedLiquidationEvent' }
    & Pick<StartedLiquidationEvent, 'cause' | 'id' | 'transactionHash' | 'submitter' | 'timestamp'>
  )> }
);

export type GetDepositsQueryVariables = Exact<{
  where?: Maybe<Deposit_Filter>;
}>;


export type GetDepositsQuery = (
  { __typename?: 'Query' }
  & { deposits: Array<(
    { __typename?: 'Deposit' }
    & Pick<Deposit, 'id' | 'contractAddress' | 'lotSizeSatoshis' | 'currentState' | 'keepAddress' | 'updatedAt' | 'undercollateralizedThresholdPercent' | 'severelyUndercollateralizedThresholdPercent'>
    & { tdtToken: (
      { __typename?: 'TBTCDepositToken' }
      & Pick<TbtcDepositToken, 'owner'>
    ), bondedECDSAKeep?: Maybe<(
      { __typename?: 'BondedECDSAKeep' }
      & Pick<BondedEcdsaKeep, 'id' | 'totalBondAmount' | 'publicKey'>
    )> }
    & NiceStateLabelFragment
  )> }
);

export type ChangeFragment = (
  { __typename?: 'GovernanceChange' }
  & Pick<GovernanceChange, 'type' | 'requestedAt' | 'takesEffectAfter' | 'newLotSizes' | 'newFactorySelector' | 'newFullyBackedFactory' | 'newKeepStakedFactory'>
);

export type GetGovernanceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGovernanceQuery = (
  { __typename?: 'Query' }
  & { governance?: Maybe<(
    { __typename?: 'Governance' }
    & Pick<Governance, 'newDepositsAllowed' | 'lotSizes' | 'factorySelector' | 'fullyBackedFactory' | 'keepStakedFactory' | 'signerFeeDivisor' | 'initialCollateralizedPercent' | 'severelyUndercollateralizedThresholdPercent' | 'undercollateralizedThresholdPercent' | 'priceFeeds'>
    & { pendingLotSizeChange?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )>, pendingFactoriesChange?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )>, pendingSignerFeeDivisorChange?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )> }
  )>, governanceLogEntries: Array<(
    { __typename?: 'GovernanceLogEntry' }
    & Pick<GovernanceLogEntry, 'id' | 'timestamp' | 'transactionHash' | 'submitter' | 'isRequest'>
    & { change?: Maybe<(
      { __typename?: 'GovernanceChange' }
      & ChangeFragment
    )> }
  )> }
);

export type GetOperatorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOperatorQuery = (
  { __typename?: 'Query' }
  & { operator?: Maybe<(
    { __typename?: 'Operator' }
    & Pick<Operator, 'id' | 'address' | 'bonded' | 'unboundAvailable' | 'stakedAmount' | 'totalFaultCount' | 'attributableFaultCount' | 'totalTBTCRewards'>
    & { keeps?: Maybe<Array<(
      { __typename?: 'BondedECDSAKeep' }
      & Pick<BondedEcdsaKeep, 'id' | 'totalBondAmount'>
      & { deposit: (
        { __typename?: 'Deposit' }
        & Pick<Deposit, 'id' | 'contractAddress' | 'lotSizeSatoshis' | 'currentState' | 'keepAddress' | 'createdAt' | 'undercollateralizedThresholdPercent' | 'severelyUndercollateralizedThresholdPercent'>
        & { tdtToken: (
          { __typename?: 'TBTCDepositToken' }
          & Pick<TbtcDepositToken, 'owner'>
        ), bondedECDSAKeep?: Maybe<(
          { __typename?: 'BondedECDSAKeep' }
          & Pick<BondedEcdsaKeep, 'id' | 'totalBondAmount'>
        )> }
        & NiceStateLabelFragment
      ) }
    )>> }
  )> }
);

export type GetOperatorsQueryVariables = Exact<{
  orderBy?: Maybe<Operator_OrderBy>;
  direction?: Maybe<OrderDirection>;
}>;


export type GetOperatorsQuery = (
  { __typename?: 'Query' }
  & { stats?: Maybe<(
    { __typename?: 'StatsRecord' }
    & Pick<StatsRecord, 'availableToBeBonded' | 'totalBonded'>
  )>, operators: Array<(
    { __typename?: 'Operator' }
    & Pick<Operator, 'id' | 'address' | 'bonded' | 'unboundAvailable' | 'totalKeepCount' | 'activeKeepCount' | 'stakedAmount' | 'totalFaultCount' | 'attributableFaultCount' | 'totalTBTCRewards'>
  )> }
);

export type GetUsersQueryVariables = Exact<{
  orderBy?: Maybe<User_OrderBy>;
  direction?: Maybe<OrderDirection>;
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'address' | 'numDepositsCreated' | 'numDepositsUnfunded' | 'numDepositsRedeemed' | 'numOwnDepositsRedeemed'>
  )> }
);

export type NiceStateLabelFragment = (
  { __typename?: 'Deposit' }
  & Pick<Deposit, 'currentState'>
  & { bondedECDSAKeep?: Maybe<(
    { __typename?: 'BondedECDSAKeep' }
    & Pick<BondedEcdsaKeep, 'publicKey'>
  )>, depositSetup?: Maybe<(
    { __typename?: 'DepositSetup' }
    & Pick<DepositSetup, 'failureReason'>
  )> }
);

export const ChangeFragmentDoc = gql`
    fragment Change on GovernanceChange {
  type
  requestedAt
  takesEffectAfter
  newLotSizes
  newFactorySelector
  newFullyBackedFactory
  newKeepStakedFactory
}
    `;
export const NiceStateLabelFragmentDoc = gql`
    fragment NiceStateLabel on Deposit {
  currentState
  bondedECDSAKeep {
    publicKey
  }
  depositSetup {
    failureReason
  }
}
    `;
export const GetDepositDocument = gql`
    query GetDeposit($id: ID!) {
  deposit(id: $id) {
    id
    contractAddress
    currentState
    createdAt
    keepAddress
    lotSizeSatoshis
    endOfTerm
    tdtToken {
      id
      tokenID
      owner
      minter
    }
    initialCollateralizedPercent
    undercollateralizedThresholdPercent
    severelyUndercollateralizedThresholdPercent
    bondedECDSAKeep {
      id
      keepAddress
      totalBondAmount
      publicKey
      status
      honestThreshold
      members {
        id
        address
      }
    }
    depositLiquidation {
      cause
    }
    ...NiceStateLabel
  }
}
    ${NiceStateLabelFragmentDoc}`;

/**
 * __useGetDepositQuery__
 *
 * To run a query within a React component, call `useGetDepositQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDepositQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositQuery, GetDepositQueryVariables>) {
        return Apollo.useQuery<GetDepositQuery, GetDepositQueryVariables>(GetDepositDocument, baseOptions);
      }
export function useGetDepositLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositQuery, GetDepositQueryVariables>) {
          return Apollo.useLazyQuery<GetDepositQuery, GetDepositQueryVariables>(GetDepositDocument, baseOptions);
        }
export type GetDepositQueryHookResult = ReturnType<typeof useGetDepositQuery>;
export type GetDepositLazyQueryHookResult = ReturnType<typeof useGetDepositLazyQuery>;
export type GetDepositQueryResult = Apollo.QueryResult<GetDepositQuery, GetDepositQueryVariables>;
export const WatchDepositDocument = gql`
    subscription WatchDeposit($id: ID!) {
  deposit(id: $id) {
    id
    currentState
  }
}
    `;

/**
 * __useWatchDepositSubscription__
 *
 * To run a query within a React component, call `useWatchDepositSubscription` and pass it any options that fit your needs.
 * When your component renders, `useWatchDepositSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchDepositSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWatchDepositSubscription(baseOptions?: Apollo.SubscriptionHookOptions<WatchDepositSubscription, WatchDepositSubscriptionVariables>) {
        return Apollo.useSubscription<WatchDepositSubscription, WatchDepositSubscriptionVariables>(WatchDepositDocument, baseOptions);
      }
export type WatchDepositSubscriptionHookResult = ReturnType<typeof useWatchDepositSubscription>;
export type WatchDepositSubscriptionResult = Apollo.SubscriptionResult<WatchDepositSubscription>;
export const GetDepositLogsDocument = gql`
    query GetDepositLogs($depositId: String!) {
  events(where: {deposit: $depositId}, orderBy: timestamp, orderDirection: desc) {
    __typename
    id
    transactionHash
    submitter
    timestamp
    ... on RegisteredPubKeyEvent {
      signingGroupPubkeyX
      signingGroupPubkeyY
    }
    ... on StartedLiquidationEvent {
      cause
    }
    ... on SetupFailedEvent {
      reason
      deposit {
        bondedECDSAKeep {
          pubkeySubmissions {
            address
          }
          members {
            address
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetDepositLogsQuery__
 *
 * To run a query within a React component, call `useGetDepositLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositLogsQuery({
 *   variables: {
 *      depositId: // value for 'depositId'
 *   },
 * });
 */
export function useGetDepositLogsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositLogsQuery, GetDepositLogsQueryVariables>) {
        return Apollo.useQuery<GetDepositLogsQuery, GetDepositLogsQueryVariables>(GetDepositLogsDocument, baseOptions);
      }
export function useGetDepositLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositLogsQuery, GetDepositLogsQueryVariables>) {
          return Apollo.useLazyQuery<GetDepositLogsQuery, GetDepositLogsQueryVariables>(GetDepositLogsDocument, baseOptions);
        }
export type GetDepositLogsQueryHookResult = ReturnType<typeof useGetDepositLogsQuery>;
export type GetDepositLogsLazyQueryHookResult = ReturnType<typeof useGetDepositLogsLazyQuery>;
export type GetDepositLogsQueryResult = Apollo.QueryResult<GetDepositLogsQuery, GetDepositLogsQueryVariables>;
export const GetDepositsDocument = gql`
    query GetDeposits($where: Deposit_filter) {
  deposits(first: 1000, orderBy: updatedAt, orderDirection: desc, where: $where) {
    id
    contractAddress
    lotSizeSatoshis
    currentState
    keepAddress
    updatedAt
    tdtToken {
      owner
    }
    undercollateralizedThresholdPercent
    severelyUndercollateralizedThresholdPercent
    bondedECDSAKeep {
      id
      totalBondAmount
      publicKey
    }
    ...NiceStateLabel
  }
}
    ${NiceStateLabelFragmentDoc}`;

/**
 * __useGetDepositsQuery__
 *
 * To run a query within a React component, call `useGetDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepositsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepositsQuery, GetDepositsQueryVariables>) {
        return Apollo.useQuery<GetDepositsQuery, GetDepositsQueryVariables>(GetDepositsDocument, baseOptions);
      }
export function useGetDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepositsQuery, GetDepositsQueryVariables>) {
          return Apollo.useLazyQuery<GetDepositsQuery, GetDepositsQueryVariables>(GetDepositsDocument, baseOptions);
        }
export type GetDepositsQueryHookResult = ReturnType<typeof useGetDepositsQuery>;
export type GetDepositsLazyQueryHookResult = ReturnType<typeof useGetDepositsLazyQuery>;
export type GetDepositsQueryResult = Apollo.QueryResult<GetDepositsQuery, GetDepositsQueryVariables>;
export const GetGovernanceDocument = gql`
    query GetGovernance {
  governance(id: "GOVERNANCE") {
    newDepositsAllowed
    lotSizes
    pendingLotSizeChange {
      ...Change
    }
    factorySelector
    fullyBackedFactory
    keepStakedFactory
    pendingFactoriesChange {
      ...Change
    }
    signerFeeDivisor
    pendingSignerFeeDivisorChange {
      ...Change
    }
    initialCollateralizedPercent
    severelyUndercollateralizedThresholdPercent
    undercollateralizedThresholdPercent
    priceFeeds
  }
  governanceLogEntries(first: 300, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    transactionHash
    submitter
    isRequest
    change {
      ...Change
    }
  }
}
    ${ChangeFragmentDoc}`;

/**
 * __useGetGovernanceQuery__
 *
 * To run a query within a React component, call `useGetGovernanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGovernanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGovernanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGovernanceQuery(baseOptions?: Apollo.QueryHookOptions<GetGovernanceQuery, GetGovernanceQueryVariables>) {
        return Apollo.useQuery<GetGovernanceQuery, GetGovernanceQueryVariables>(GetGovernanceDocument, baseOptions);
      }
export function useGetGovernanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGovernanceQuery, GetGovernanceQueryVariables>) {
          return Apollo.useLazyQuery<GetGovernanceQuery, GetGovernanceQueryVariables>(GetGovernanceDocument, baseOptions);
        }
export type GetGovernanceQueryHookResult = ReturnType<typeof useGetGovernanceQuery>;
export type GetGovernanceLazyQueryHookResult = ReturnType<typeof useGetGovernanceLazyQuery>;
export type GetGovernanceQueryResult = Apollo.QueryResult<GetGovernanceQuery, GetGovernanceQueryVariables>;
export const GetOperatorDocument = gql`
    query GetOperator($id: ID!) {
  operator(id: $id) {
    id
    address
    bonded
    unboundAvailable
    stakedAmount
    totalFaultCount
    attributableFaultCount
    totalTBTCRewards
    keeps(first: 300, orderBy: createdAt, orderDirection: desc) {
      id
      totalBondAmount
      deposit {
        id
        contractAddress
        lotSizeSatoshis
        currentState
        keepAddress
        createdAt
        tdtToken {
          owner
        }
        undercollateralizedThresholdPercent
        severelyUndercollateralizedThresholdPercent
        bondedECDSAKeep {
          id
          totalBondAmount
        }
        ...NiceStateLabel
      }
    }
  }
}
    ${NiceStateLabelFragmentDoc}`;

/**
 * __useGetOperatorQuery__
 *
 * To run a query within a React component, call `useGetOperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOperatorQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorQuery, GetOperatorQueryVariables>) {
        return Apollo.useQuery<GetOperatorQuery, GetOperatorQueryVariables>(GetOperatorDocument, baseOptions);
      }
export function useGetOperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorQuery, GetOperatorQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorQuery, GetOperatorQueryVariables>(GetOperatorDocument, baseOptions);
        }
export type GetOperatorQueryHookResult = ReturnType<typeof useGetOperatorQuery>;
export type GetOperatorLazyQueryHookResult = ReturnType<typeof useGetOperatorLazyQuery>;
export type GetOperatorQueryResult = Apollo.QueryResult<GetOperatorQuery, GetOperatorQueryVariables>;
export const GetOperatorsDocument = gql`
    query GetOperators($orderBy: Operator_orderBy, $direction: OrderDirection) {
  stats: statsRecord(id: "current") {
    availableToBeBonded
    totalBonded
  }
  operators(first: 1000, orderBy: $orderBy, orderDirection: $direction) {
    id
    address
    bonded
    unboundAvailable
    totalKeepCount
    activeKeepCount
    stakedAmount
    totalFaultCount
    attributableFaultCount
    totalTBTCRewards
  }
}
    `;

/**
 * __useGetOperatorsQuery__
 *
 * To run a query within a React component, call `useGetOperatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOperatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOperatorsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      direction: // value for 'direction'
 *   },
 * });
 */
export function useGetOperatorsQuery(baseOptions?: Apollo.QueryHookOptions<GetOperatorsQuery, GetOperatorsQueryVariables>) {
        return Apollo.useQuery<GetOperatorsQuery, GetOperatorsQueryVariables>(GetOperatorsDocument, baseOptions);
      }
export function useGetOperatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOperatorsQuery, GetOperatorsQueryVariables>) {
          return Apollo.useLazyQuery<GetOperatorsQuery, GetOperatorsQueryVariables>(GetOperatorsDocument, baseOptions);
        }
export type GetOperatorsQueryHookResult = ReturnType<typeof useGetOperatorsQuery>;
export type GetOperatorsLazyQueryHookResult = ReturnType<typeof useGetOperatorsLazyQuery>;
export type GetOperatorsQueryResult = Apollo.QueryResult<GetOperatorsQuery, GetOperatorsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($orderBy: User_orderBy, $direction: OrderDirection) {
  users(first: 1000, orderBy: $orderBy, orderDirection: $direction) {
    id
    address
    numDepositsCreated
    numDepositsUnfunded
    numDepositsRedeemed
    numOwnDepositsRedeemed
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      direction: // value for 'direction'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const Change = gql`
    fragment Change on GovernanceChange {
  type
  requestedAt
  takesEffectAfter
  newLotSizes
  newFactorySelector
  newFullyBackedFactory
  newKeepStakedFactory
}
    `;
export const NiceStateLabel = gql`
    fragment NiceStateLabel on Deposit {
  currentState
  bondedECDSAKeep {
    publicKey
  }
  depositSetup {
    failureReason
  }
}
    `;
export const GetDeposit = gql`
    query GetDeposit($id: ID!) {
  deposit(id: $id) {
    id
    contractAddress
    currentState
    createdAt
    keepAddress
    lotSizeSatoshis
    endOfTerm
    tdtToken {
      id
      tokenID
      owner
      minter
    }
    initialCollateralizedPercent
    undercollateralizedThresholdPercent
    severelyUndercollateralizedThresholdPercent
    bondedECDSAKeep {
      id
      keepAddress
      totalBondAmount
      publicKey
      status
      honestThreshold
      members {
        id
        address
      }
    }
    depositLiquidation {
      cause
    }
    ...NiceStateLabel
  }
}
    ${NiceStateLabel}`;
export const WatchDeposit = gql`
    subscription WatchDeposit($id: ID!) {
  deposit(id: $id) {
    id
    currentState
  }
}
    `;
export const GetDepositLogs = gql`
    query GetDepositLogs($depositId: String!) {
  events(where: {deposit: $depositId}, orderBy: timestamp, orderDirection: desc) {
    __typename
    id
    transactionHash
    submitter
    timestamp
    ... on RegisteredPubKeyEvent {
      signingGroupPubkeyX
      signingGroupPubkeyY
    }
    ... on StartedLiquidationEvent {
      cause
    }
    ... on SetupFailedEvent {
      reason
      deposit {
        bondedECDSAKeep {
          pubkeySubmissions {
            address
          }
          members {
            address
          }
        }
      }
    }
  }
}
    `;
export const GetDeposits = gql`
    query GetDeposits($where: Deposit_filter) {
  deposits(first: 1000, orderBy: updatedAt, orderDirection: desc, where: $where) {
    id
    contractAddress
    lotSizeSatoshis
    currentState
    keepAddress
    updatedAt
    tdtToken {
      owner
    }
    undercollateralizedThresholdPercent
    severelyUndercollateralizedThresholdPercent
    bondedECDSAKeep {
      id
      totalBondAmount
      publicKey
    }
    ...NiceStateLabel
  }
}
    ${NiceStateLabel}`;
export const GetGovernance = gql`
    query GetGovernance {
  governance(id: "GOVERNANCE") {
    newDepositsAllowed
    lotSizes
    pendingLotSizeChange {
      ...Change
    }
    factorySelector
    fullyBackedFactory
    keepStakedFactory
    pendingFactoriesChange {
      ...Change
    }
    signerFeeDivisor
    pendingSignerFeeDivisorChange {
      ...Change
    }
    initialCollateralizedPercent
    severelyUndercollateralizedThresholdPercent
    undercollateralizedThresholdPercent
    priceFeeds
  }
  governanceLogEntries(first: 300, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    transactionHash
    submitter
    isRequest
    change {
      ...Change
    }
  }
}
    ${Change}`;
export const GetOperator = gql`
    query GetOperator($id: ID!) {
  operator(id: $id) {
    id
    address
    bonded
    unboundAvailable
    stakedAmount
    totalFaultCount
    attributableFaultCount
    totalTBTCRewards
    keeps(first: 300, orderBy: createdAt, orderDirection: desc) {
      id
      totalBondAmount
      deposit {
        id
        contractAddress
        lotSizeSatoshis
        currentState
        keepAddress
        createdAt
        tdtToken {
          owner
        }
        undercollateralizedThresholdPercent
        severelyUndercollateralizedThresholdPercent
        bondedECDSAKeep {
          id
          totalBondAmount
        }
        ...NiceStateLabel
      }
    }
  }
}
    ${NiceStateLabel}`;
export const GetOperators = gql`
    query GetOperators($orderBy: Operator_orderBy, $direction: OrderDirection) {
  stats: statsRecord(id: "current") {
    availableToBeBonded
    totalBonded
  }
  operators(first: 1000, orderBy: $orderBy, orderDirection: $direction) {
    id
    address
    bonded
    unboundAvailable
    totalKeepCount
    activeKeepCount
    stakedAmount
    totalFaultCount
    attributableFaultCount
    totalTBTCRewards
  }
}
    `;
export const GetUsers = gql`
    query GetUsers($orderBy: User_orderBy, $direction: OrderDirection) {
  users(first: 1000, orderBy: $orderBy, orderDirection: $direction) {
    id
    address
    numDepositsCreated
    numDepositsUnfunded
    numDepositsRedeemed
    numOwnDepositsRedeemed
  }
}
    `;