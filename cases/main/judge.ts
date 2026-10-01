import {defineJudge, readUsageMetric, type JudgeResult} from '@trapstreet/sdk';
import {readText} from '@trapstreet/sdk/files';

export default defineJudge(async function judgeCase({input, output, usage}): Promise<JudgeResult> {
  if (input.status !== 'available' || output.status !== 'available') {
    throw Error('missing evidence');
  }
  const expected = await readText(input.data.directory, 'expected.txt');
  const actual = await readText(output.data.directory, 'answer.txt');
  return {
    type: 'score',
    value: actual === expected ? 100 : 0,
    extra_data: {cost: readUsageMetric(usage, 'cost_usd')}
  };
});
