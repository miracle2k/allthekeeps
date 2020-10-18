import React, {useEffect, useState} from "react";
import {css} from "emotion";
import { Paper } from "../design-system/Paper";
import {Helmet} from "react-helmet";
import {TwitterTweetEmbed} from 'react-twitter-embed';
import {TimeToNow} from "../components/FormattedTime";
import {TorchMapping} from "../torchAccountMapping";


export function ZksyncTorch() {
  return <div className={css`
      padding: 1em;
    `}>
    <Helmet>
      <title>#tBTCzksynctorch</title>
    </Helmet>
    <Content />
  </div>
}

export function Content() {
  const [chain, setChain] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://tbtc-torch.srvpool.de/torch').then(async (r) => {
      const data = await r.json()
      setChain(data.reverse());
      setLoading(false);
    }).catch(() => {
      setError(true);
      setLoading(false);
    })
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
  `}>
    <div className={css`
      display: flex;
      flex-direction: row;
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 45px;
  `}>
      <a href={"https://twitter.com/search?q=%23tBTCzksynctorch&src=typed_query"}>#tBTCzksynctorch</a>
    </div>


    <div className={css`
      display: flex;
      flex-direction: column;
      & > * {
        margin-right: 20px;
        }
    `}>
      {
        chain!.map((item: any, idx: number) => {
          return <div className={css`
            margin-bottom: 10px;
          `}>
            <Step
                num={chain!.length - idx + 1}
                from={item.to}
                amount={item.amount}
                time={item.timestamp}
                txid={item.tx_id}
            />
            <div style={{
              textAlign: 'center',
              margin: 20
            }}>
              ↑
            </div>
          </div>
        })
      }
      <Step num={1} from={chain[chain.length - 1].from} amount={0} />
    </div>
  </div>
}

function Step(props: {
  txid?: string,
  num: number,
  from: any,
  amount: any,
  time?: any
}) {
  const {from, amount, time} = props;

  let tweetUrl = (TorchMapping as any)[from];
  if (typeof tweetUrl == 'object') {
    tweetUrl = tweetUrl[props.txid ?? ""];
  }
  let tweetId;
  if (tweetUrl) {
    const match = tweetUrl.match(/status\/(\d+)$/);
    tweetId = match[1];
  }

  return <Paper padding>
    <div style={{color: 'gray', fontSize: '0.9em', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <span className={css`
          background: #48DBB4;
          color: black;
          width: 25px;
          height: 25px;
          border: 1px solid transparent;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
      `}>{props.num}</span>
      <TimeToNow time={time} /></div>
    <div>
      <a href={`https://zkscan.io/explorer/accounts/${from}`}>{from}</a>
    </div>
    {props.amount ? <div>
      <strong>{amount / 1000000000000000000} TBTC</strong>
    </div> : null}

    {tweetId ? <TwitterTweetEmbed
        tweetId={tweetId}
        options={{
          conversation: "none"
        }}
        placeholder={<div>...</div>}
    /> : null}
  </Paper>;
}

