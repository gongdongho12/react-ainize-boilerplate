import React, { FunctionComponent, useMemo, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useIntl } from "react-intl";
import langState, { messages, Lang } from "state/lang";
import { Select } from "antd";
import accountState from "state/account";

const { Option } = Select;

const LanguageSelector: FunctionComponent = () => {
  const [lang, setLang] = useRecoilState(langState);

  const { formatMessage: fm } = useIntl();
  
  const dom = useMemo<ReactElement[]>(() => {
    const languages: Lang[] = Object.keys(messages) as Lang[]
    return languages.map((lang: Lang) => <Option key={lang} value={lang}>{fm({ id: lang })}</Option>)
  }, [fm])

  return <Select
    defaultValue={lang}
    value={lang}
    style={{ width: 100 }}
    onChange={(value: Lang) => {
      setLang(value)
    }}>
    {dom}
  </Select>;
};

export default LanguageSelector