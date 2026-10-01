import {defineReporter, type ReporterResult} from '@trapstreet/sdk';

export default defineReporter(async function reportRun({summary}): Promise<ReporterResult> {
  return {type: 'score', value: summary.averageScore ?? 0};
});
