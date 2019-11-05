import { setErrorMessage, validator } from './validator';

describe('fonk-is-url-validator specs', () => {
  describe('should match urls', () => {
    it('should return succeeded validation with www.foo.com url', () => {
      const url = 'www.foo.com';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with www.foo.com/blah_blah url', () => {
      const url = 'www.foo.com/blah_blah';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://www.foo.com/blah_blah url', () => {
      const url = 'http://www.foo.com/blah_blah';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://www.foo.com/blah_blah url', () => {
      const url = 'https://www.foo.com/blah_blah';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://en.wikipedia.org/wiki/Arrow_(season_7) url', () => {
      const url = 'https://en.wikipedia.org/wiki/Arrow_(season_7)';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://en.wikipedia.org/wiki/Selina_Kyle_(Gotham_episode)#Critical_reception url', () => {
      const url =
        'https://en.wikipedia.org/wiki/Selina_Kyle_(Gotham_episode)#Critical_reception';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://www.example.com/wpstyle/?p=364 url', () => {
      const url = 'http://www.example.com/wpstyle/?p=364';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://www.example.com/foo/?bar=baz&inga=42&quux url', () => {
      const url = 'https://www.example.com/foo/?bar=baz&inga=42&quux';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://en.wikipedia.org/w/index.php?title=✪&redirect=no url', () => {
      const url = 'https://en.wikipedia.org/w/index.php?title=✪&redirect=no';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid:password@example.com:8080 url', () => {
      const url = 'http://userid:password@example.com:8080';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid:password@example.com:8080/ url', () => {
      const url = 'http://userid:password@example.com:8080/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid@example.com url', () => {
      const url = 'http://userid@example.com';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid@example.com/ url', () => {
      const url = 'http://userid@example.com/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid@example.com:8080 url', () => {
      const url = 'http://userid@example.com:8080';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid@example.com:8080/ url', () => {
      const url = 'http://userid@example.com:8080/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid:password@example.com url', () => {
      const url = 'http://userid:password@example.com';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://userid:password@example.com/ url', () => {
      const url = 'http://userid:password@example.com/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://142.42.1.1/ url', () => {
      const url = 'http://142.42.1.1/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://142.42.1.1:8080/ url', () => {
      const url = 'http://142.42.1.1:8080/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://zh.m.wiktionary.org/zh-hant/䨹 url', () => {
      const url = 'https://zh.m.wiktionary.org/zh-hant/䨹';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://en.wikipedia.org/wiki/⌘ url', () => {
      const url = 'https://en.wikipedia.org/wiki/⌘';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://foo.com/blah_(wikipedia)#cite-1 url', () => {
      const url = 'http://foo.com/blah_(wikipedia)#cite-1';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://foo.com/blah_(wikipedia)_blah#cite-1 url', () => {
      const url = 'http://foo.com/blah_(wikipedia)_blah#cite-1';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://foo.com/unicode_(Ʊ)_in_parens url', () => {
      const url = 'http://foo.com/unicode_(Ʊ)_in_parens';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://foo.com/(something)?after=parens url', () => {
      const url = 'http://foo.com/(something)?after=parens';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://en.wikipedia.org/wiki/∆ url', () => {
      const url = 'https://en.wikipedia.org/wiki/∆';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://code.google.com/events/#&product=browser url', () => {
      const url = 'http://code.google.com/events/#&product=browser';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://j.mp url', () => {
      const url = 'http://j.mp';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with ftp://foo.bar/baz url', () => {
      const url = 'ftp://foo.bar/baz';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://foo.bar/?q=Test%20URL-encoded%20stuff url', () => {
      const url = 'http://foo.bar/?q=Test%20URL-encoded%20stuff';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://en.wiktionary.org/wiki/مثال', () => {
      const url = 'https://en.wiktionary.org/wiki/مثال';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://dict.cn/例子 url', () => {
      const url = 'http://dict.cn/例子';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with https://shabdkosh.raftaar.in/Meaning-of-उदाहरण-in-English url', () => {
      const url = 'https://shabdkosh.raftaar.in/Meaning-of-उदाहरण-in-English';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it("should return succeeded validation with http://-.~_!$&'()*+,;=:%40:80%2f:@example.com url", () => {
      const url = "http://-.~_!$&'()*+,;=:%40:80%2f:@example.com";

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://1337.net url', () => {
      const url = 'http://1337.net';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://a.b-c.de url', () => {
      const url = 'http://a.b-c.de';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
    it('should return succeeded validation with http://223.255.255.254 url', () => {
      const url = 'http://223.255.255.254';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: true,
        message: '',
        type: 'IS_URL',
      });
    });
  });

  describe('Should not match urls', () => {
    it('Should return failed validation with http://', () => {
      const url = 'http://';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://.', () => {
      const url = 'http://.';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://..', () => {
      const url = 'http://..';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://../', () => {
      const url = 'http://../';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://?', () => {
      const url = 'http://?';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://??', () => {
      const url = 'http://??';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://??/', () => {
      const url = 'http://??/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://#', () => {
      const url = 'http://#';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://##', () => {
      const url = 'http://##';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://##/', () => {
      const url = 'http://##/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://foo.bar?q=Spaces should be encoded', () => {
      const url = 'http://foo.bar?q=Spaces should be encoded';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });

    it('Should return failed validation with http:///a', () => {
      const url = 'http:///a';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with foo.com', () => {
      const url = 'foo.com';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with rdar://1234', () => {
      const url = 'rdar://1234';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with h://test', () => {
      const url = 'h://test';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http:// shouldfail.com', () => {
      const url = 'http:// shouldfail.com';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with :// should fail', () => {
      const url = ':// should fail';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://foo.bar/foo(bar)baz quux', () => {
      const url = 'http://foo.bar/foo(bar)baz quux';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with ftps://foo.bar/', () => {
      const url = 'ftps://foo.bar/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://-error-.invalid/', () => {
      const url = 'http://-error-.invalid/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://-a.b--c.de/', () => {
      const url = 'http://-a.b--c.de/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://-a.b.co', () => {
      const url = 'http://-a.b.co';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://a.b-.co', () => {
      const url = 'http://a.b-.co';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://0.0.0.0', () => {
      const url = 'http://0.0.0.0';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://10.1.1.0', () => {
      const url = 'http://10.1.1.0';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://10.1.1.255', () => {
      const url = 'http://10.1.1.255';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://224.1.1.1', () => {
      const url = 'http://224.1.1.1';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://1.1.1.1.1', () => {
      const url = 'http://1.1.1.1.1';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://123.123.123', () => {
      const url = 'http://123.123.123';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://3628126748', () => {
      const url = 'http://3628126748';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://.www.foo.bar/', () => {
      const url = 'http://.www.foo.bar/';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://.www.foo.bar./', () => {
      const url = 'http://.www.foo.bar./';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
    it('Should return failed validation with http://10.1.1.1', () => {
      const url = 'http://10.1.1.1';

      const result = validator({ value: url });

      expect(result).toEqual({
        succeeded: false,
        message: 'Provided value is not a valid url',
        type: 'IS_URL',
      });
    });
  });

  it('should return succeeded validation when it feeds value equals undefined', () => {
    const value = void 0;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_URL',
    });
  });

  it('should return succeeded validation when it feeds value equals null', () => {
    const value = null;

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_URL',
    });
  });

  it('should return succeeded validation when it feeds value equals empty string', () => {
    const value = '';

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: true,
      message: '',
      type: 'IS_URL',
    });
  });

  it('should overwrite default message when it feeds value and message', () => {
    const value = 'test';
    const message = 'other message';

    const result = validator({ value, message });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IS_URL',
    });
  });

  it('should overwrite default message when it feeds value and calls to setErrorMessage', () => {
    const value = 'test';

    setErrorMessage('other message');

    const result = validator({ value });

    expect(result).toEqual({
      succeeded: false,
      message: 'other message',
      type: 'IS_URL',
    });
  });
});
